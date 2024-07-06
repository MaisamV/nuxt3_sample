// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: true,
    modules: [
        '@vite-pwa/nuxt'
    ],
    pwa: {
        manifest: {
            name: "My PWA",
            short_name: "js13kPWA",
            start_url: "/",
            description: "Progressive Web App that lists games submitted to the A-Frame category in the js13kGames 2017 competition.",
            display: "standalone",
            theme_color: "#B12A34",
            background_color: "#B12A34",
            icons:[
                {
                    src: "icons/192.png",
                    type: "image/png",
                    sizes: "192x192"
                },
                {
                    src: "icons/512.png",
                    type: "image/png",
                    sizes: "512x512"
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
