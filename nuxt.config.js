import colors from 'vuetify/es5/util/colors'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ManagerFront',
    title: 'ManagerFront',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/vuetify',
    
    
  ],
 
  
  axios: {
    // baseURL: 'http://localhost:8000/'
    proxy: true,
    headers: {
      'Accept': 'application/json',
      "Content-Type": 'application/json'
    },
  },
  proxy: {
    // '/api/': {target: 'http://localhost:8000/', pathRewrite: {'^/api/': ''} }
    '/api/': {target: 'http://0.0.0.0:8000/', pathRewrite: {'^/api/': ''} }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          lightgrey: colors.grey.lighten4,
          darkblue: colors.blue.darken3,
          darkpink: colors.pink.darken3,
          darkyellow: colors.yellow.darken1,
          teal: colors.teal.accent1,
          indigo: colors.indigo.darken3,
          red: colors.red.darken3,
          orange: colors.deepOrange.accent3,
          blue: colors.blueGrey.darken2,
          green: colors.green.darken3,
          darkIndigo: colors.indigo.darken4,
          darkerGrey: colors.grey.darken4,
          darkerRed: colors.red.darken4,
          darkerGreen: colors.green.darken4,
          lighterGrey: colors.grey.darken2,
          gold: colors.yellow.darken1,
          silver: colors.grey.darken1,
          bronze: colors.brown.darken1,

        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
