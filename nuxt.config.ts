// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: true,
    modules: [
        '@vite-pwa/nuxt',
        '@pinia/nuxt'
    ],
    pwa: {
        manifest: {
            name: "My PWA",
            short_name: "My PWA",
            start_url: "/",
            description: "A simple Progressive Web App",
            display: "standalone",
            theme_color: "#B12A34",
            background_color: "#B12A34",
            screenshots: [
                {
                    src: "screenshots/wide.png",
                    form_factor: 'wide',
                    sizes: "2466x1258",
                },
                {
                    src: "screenshots/narrow.png",
                    form_factor: 'narrow',
                    sizes: "747x1150",
                }
            ],
            icons:[
                {
                    src: "icons/360.png",
                    type: "image/png",
                    sizes: "360x360"
                },
                {
                    src: "icons/768.png",
                    type: "image/png",
                    sizes: "768x768"
                }
            ]
        },
        workbox: {
            navigateFallback: '/'
        },
        devOptions: {
            enabled: true,
            type: 'module'
        }
    }
})
