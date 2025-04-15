export default defineEventHandler(async (event) => {

    const {openaiApiKey, openaiAssistantId} = useRuntimeConfig(event)
    // Get the request body
    const body = await readBody(event)

    // Define common headers for all OpenAI API requests
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
        'OpenAI-Beta': 'assistants=v2'
    }

    if (!openaiApiKey) {
        throw createError({
            statusCode: 500,
            message: 'API key not configured'
        })
    }

    if (!openaiAssistantId) {
        throw createError({
            statusCode: 500,
            message: 'Assistant ID not configured'
        })
    }

    try {
        // If there's no thread_id in the request, create a new thread
        let threadId = body.thread_id

        if (!threadId) {
            // Create a new thread
            const threadResponse = await fetch('https://api.openai.com/v1/threads', {
                method: 'POST',
                headers,
                body: JSON.stringify({})
            })

            const threadData = await threadResponse.json()
            if (!threadResponse.ok) {
                console.error('Thread creation error:', threadData);
                throw createError({
                    statusCode: threadResponse.status,
                    message: `Failed to create thread: ${threadData.error?.message || 'Unknown error'}`
                })
            }

            threadId = threadData.id
        }

        // Add the user's message to the thread
        if (body.message) {
            const messageResponse = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    role: 'user',
                    content: body.message
                })
            })

            if (!messageResponse.ok) {
                const messageData = await messageResponse.json();
                console.error('Message creation error:', messageData);
                throw createError({
                    statusCode: messageResponse.status,
                    message: `Failed to add message: ${messageData.error?.message || 'Unknown error'}`
                })
            }
        }

        // Run the assistant on the thread
        const runResponse = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                assistant_id: openaiAssistantId
            })
        })

        const runData = await runResponse.json()

        if (!runResponse.ok) {
            throw createError({
                statusCode: runResponse.status,
                message: `Failed to create run: ${runData.error?.message || 'Unknown error'}`
            })
        }
        const runId = runData.id
        let runStatus = await checkRunStatus(openaiApiKey, threadId, runId)
        let attempts = 0;
        const MAX_ATTEMPTS = 50;

        // Wait for the run to complete (simple polling mechanism)
        while (runStatus.status !== 'completed' && runStatus.status !== 'failed' && attempts < MAX_ATTEMPTS) {
            // Wait for a bit before checking again
            await new Promise(resolve => setTimeout(resolve, 1000));
            runStatus = await checkRunStatus(openaiApiKey, threadId, runId);
            attempts++;
        }

        // Add a check after the loop to handle max attempts reached
        if (attempts >= MAX_ATTEMPTS) {
            throw createError({
                statusCode: 504, // Gateway Timeout
                message: 'Assistant run timed out after maximum polling attempts'
            });
        }

        if (runStatus.status === 'failed') {
            throw createError({
                statusCode: 500,
                message: 'Assistant run failed: ' + (runStatus.last_error?.message || 'Unknown error')
            })
        }

        // Once the run is complete, get the assistant's messages
        const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
            method: 'GET',
            headers
        })

        const messagesData = await messagesResponse.json()

        if (!messagesResponse.ok) {
            throw createError({
                statusCode: messagesResponse.status,
                message: `Failed to retrieve messages: ${messagesData.error?.message || 'Unknown error'}`
            })
        }

        // Return the thread ID and the messages
        return {
            thread_id: threadId,
            messages: messagesData.data
        }
    } catch (error) {
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Something went wrong processing your request'
        })
    }
})

// Helper function to check run status
async function checkRunStatus(apiKey, threadId, runId) {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'OpenAI-Beta': 'assistants=v2'
        }
    })

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to check run status: ${errorData.error?.message || 'Unknown error'}`);
    }

    return response.json()
}