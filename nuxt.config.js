// https://v3.nuxtjs.org/api/configuration/nuxt.config
const webpack = require('webpack')
export default {
    server: {
        port: process.env.PORT || 3000, // default: 3000
        // host: '0.0.0.0', // default: localhost
        // timing: true,
    }, // other configs

    title: 'Hello Nuxt',
    theme: {
        dark: true,
        colors: {
            primary: '#ff0000'
        }
    },

    target: 'static',
    ssr: false,

    buildModules: [
        '@nuxtjs/dotenv',
        // '@nuxtjs/google-fonts',
    ],

    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // ["@nuxtjs/axios", { proxyHeaders: false }],
        // https://go.nuxtjs.dev/pwa
        // '@nuxtjs/pwa',
        // '@nuxtjs/auth-next',
        // '@nuxtjs/proxy',
        [
            'nuxt-vuex-localstorage',
            {
                mode: 'debug',
                localStorage: ['index'],
            },
        ],
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: ['~/components'],
    },

    plugins: [
        { src: '~/plugins/axios.js' },
        // { src: '~/plugins/helpers.js' },
    ],

    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    build: {
        postcss: null,
        transpile: [/(.+)(nuxt-vuex-localstorage\/)(.+)(\.js)$/],
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }),
        ],
        extend(config, ctx) {
            config.node = {
                fs: 'empty',
            }
        },
    },
}
