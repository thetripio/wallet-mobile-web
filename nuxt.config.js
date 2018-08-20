const pkg = require('./package.json');
const webpack = require('webpack');
const path = require('path');
const resolve = file => path.resolve(__dirname, file);

module.exports = {
    mode: 'spa',
    srcDir: 'src/',
    dir: {
        static: resolve('./static/')
    },
    build: {
        vendor: ['babel-polyfill'],
        extractCSS: {
            allChunks: true
        },
        uglify: {
            uglifyOptions: {
                mangle: { safari10: true }
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                APP_CONF: resolve('./config/' + (process.env.APP_CONF || 'dev')),
                to: ['await-to-js', 'default']
            }),
        ]
    },
    env: {
        APP_VERSION: pkg.version
    },
    modules: [
        'cookie-universal-nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        ['nuxt-i18n', {
            locales: [
                { code: 'en', langFile: 'en.json', iso: '' },
                { code: 'cn', langFile: 'cn.json', iso: '' }
            ],
            defaultLocale: 'cn',
            loadLanguagesAsync: true,
            langDir: 'locales/'
        }]
    ],
    axios: {
        browserBaseURL: '/',
        retry: { retries: 3 }
    },
    css: [
        { 'src': '~/assets/styles/main.scss' },
        { 'src': '~/assets/icons/iconfont.css' }
    ],
    loading: {
        color: '#4FC08D',
        failedColor: '#bf5050',
        duration: 1500
    },
    router: {
        //middleware: ['auth']
    },
    plugins: [
        '~/plugins/index',
        '~/business/index',
        //'~/business/filters',
        '~/widgets/index',
        '~/components/index'
    ],
    head: {
        title: 'TRIO Wallet',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0' }
        ],
        link: [
            { rel: 'apple-touch-icon-precomposed', href: '/appicon.png' }
        ],
        __dangerouslyDisableSanitizers: ['script']
    }
}