export default defineEventHandler(() => {
    return {
        message: "Server route is working",
        time: new Date().toISOString()
    }
})