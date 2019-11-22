// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  loading: '~/components/loading.vue',
  loadingIndicator: {
    name: 'rectangle-bounce',
    color: '#0094fe',
    background: 'white'
  },
  /*
   ** Global CSS
   */
  css: [
    // 'iview-design/dist/styles/iview.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/3rd/iview-design', '@/plugins/3rd/i18n'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    babel: {
      babelrc: true
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
