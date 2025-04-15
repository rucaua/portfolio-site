export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    modules: [
        '@nuxt/eslint',
        '@nuxt/icon',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/test-utils',
        '@nuxt/ui'
    ],

    ui: {
        icons: ['heroicons', 'simple-icons'],
        theme: {
            colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
        }
    },

    css: ['~/assets/css/main.css'],

    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: ''
    },

    ssr: true,

    nitro: {
        preset: 'node-server',
        routeRules: {
            '/**': { cors: true, headers: { 'Cache-Control': 'no-store' } },
        },
        logLevel: 'debug'
    },

    runtimeConfig: {
        // Server-only keys
        openaiApiKey: process.env.OPENAI_API_KEY,
        openaiAssistantId: process.env.OPENAI_ASSISTANT_ID,
        public: {
            fullName: 'Max Tymofeiev',
            keyFeatures: [
                {title: '15+', subTitle: 'years of experience'},
                {title: 'SaaS', subTitle: 'solutions for business'},
                {title: 'Senior', subTitle: 'full stack developer'},
                {title: 'AI', subTitle: 'generative model'},
            ]
        }
    },

    app: {
        baseURL: '/',
        buildAssetsDir: '/_nuxt/',
        head: {
            title: 'Max Tymofeiev - Professional Portfolio',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Professional portfolio showcasing my work, skills, and experience'},
                {name: 'og:title', content: 'Max Tymofeiev - Professional Portfolio'},
                {name: 'og:description', content: 'Professional portfolio showcasing my work, skills, and experience'},
                {name: 'og:type', content: 'website'},
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/favicon-32x32.png'}
            ]
        }
    }

})