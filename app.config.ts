// app.config.ts
export default defineAppConfig({
    ui: {
        colors: {
            primary: 'teal',
            secondary: 'emerald',
            success: 'green',
            info: 'sky',
            warning: 'amber',
            error: 'rose',
            neutral: 'slate',
            light: {
                background: {
                    base: 'white',
                    soft: 'neutral-100',
                    softer: 'neutral-50',
                    muted: 'teal-50'
                }
            },
            dark: {
                background: {
                    base: 'teal-950',      // Very dark teal base
                    soft: 'teal-900',      // Dark teal for cards
                    softer: 'neutral-800', // Dark neutral for contrast
                    muted: 'teal-800'      // Medium-dark teal for highlights
                }
            }
        }
    }
})