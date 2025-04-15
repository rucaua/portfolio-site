<template>
  <div id="chat">
    <UContainer class="py-10">
      <div class="mt-10 max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Chat with My AI Assistant</h1>

        <UCard class="mb-4 p-0 overflow-hidden">
          <div class="bg-primary p-4 text-white">
            <h3 class="font-medium">AI Assistant Chat</h3>
          </div>

          <div ref="chatContainer" class="p-4 flex flex-col gap-4 max-h-[400px] overflow-y-auto">
            <div
                v-for="(message, i) in displayMessages"
                :key="i"
                :class="[
                'p-3 rounded-lg max-w-[80%]',
                message.role === 'assistant'
                  ? 'bg-gray-100 dark:bg-gray-800 self-start'
                  : 'bg-primary text-white self-end'
              ]"
            >
              {{ message.content }}
            </div>
            <div v-if="loading" class="self-start p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <span class="loading-dots">
                Thinking<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
              </span>
            </div>
          </div>

          <div class="p-4 border-t border-gray-200 dark:border-gray-700">
            <form @submit.prevent="sendMessage" class="flex gap-2">
              <UTextarea
                  v-model="newMessage"
                  placeholder="Type your message..."
                  autoresize
                  class="flex-1"
                  :rows="1"
                  :disabled="loading"
                  @keydown="handleKeyDown"
              />
              <UButton
                  type="submit"
                  color="primary"
                  icon="i-heroicons-paper-airplane"
                  :loading="loading"
                  :disabled="!newMessage.trim() || loading"
              />
            </form>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script>
export default {
  name: 'AIChat',
  data() {
    return {
      messages: [
        {
          role: 'assistant',
          content: "Hi there! I'm the AI assistant. How can I help you learn more about my experience, skills, or projects today?"
        }
      ],
      displayMessages: [],
      newMessage: '',
      loading: false,
      threadId: null
    }
  },
  mounted() {
    // Initialize display messages with welcome message
    this.displayMessages = [...this.messages];

    // Try to restore thread ID from localStorage
    this.threadId = localStorage.getItem('chat_thread_id');

    // Scroll to bottom on initial load
    this.$nextTick(() => {
      this.scrollToBottom();
    });
  },
  methods: {
    handleKeyDown(event) {
      // If Enter is pressed without Shift, submit the form
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent the default action (new line)
        if (this.newMessage.trim() && !this.loading) {
          this.sendMessage();
        }
      }
      // If Shift+Enter, let the default behavior happen (new line)
    },

    async sendMessage() {
      console.log('sendMessage');
      if (!this.newMessage.trim()) return;
      console.log('sendMessage2');
      // Add user message to display
      this.displayMessages.push({
        role: 'user',
        content: this.newMessage
      });

      // Scroll to bottom when new message is added
      this.$nextTick(() => {
        this.scrollToBottom();
      });

      const userQuery = this.newMessage;
      this.newMessage = '';
      this.loading = true;

      try {
        console.log('sendMessage3');
        const response = await fetch('/api/assistant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            thread_id: this.threadId,
            message: userQuery
          })
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log('API response data:', data);

        // Store the thread ID for future conversations
        this.threadId = data.thread_id;
        localStorage.setItem('chat_thread_id', this.threadId);

        // Add the AI response to the messages
        if (data.messages && data.messages.length > 0) {
          // Find the most recent assistant message
          const assistantMessages = data.messages.filter(msg => msg.role === 'assistant');
          if (assistantMessages.length > 0) {
            const lastMessage = assistantMessages[0];
            this.displayMessages.push({
              role: 'assistant',
              content: lastMessage.content[0]?.text?.value || "I couldn't generate a response."
            });
          }
        }

        // Scroll to bottom after receiving response
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      } catch (error) {
        console.error('Error sending message:', error);
        // Display error message to user
        this.displayMessages.push({
          role: 'assistant',
          content: "Sorry, I encountered an error. Please try again later."
        });
      } finally {
        this.loading = false;
      }
    },

    scrollToBottom() {
      const container = this.$refs.chatContainer;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }
}
</script>

<style scoped>
.loading-dots {
  display: inline-block;
}

.dot {
  opacity: 0;
  animation: dotFade 1.5s infinite;
  display: inline-block;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.5s;
}

.dot:nth-child(3) {
  animation-delay: 1s;
}

@keyframes dotFade {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
