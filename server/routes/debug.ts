export default defineEventHandler(() => {
    return {
        env: process.env.NODE_ENV,
        platform: process.platform,
        nodeVersion: process.version,
        timestamp: Date.now(),
        path: "debug"
    }
})
