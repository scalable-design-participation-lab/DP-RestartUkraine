const { defineNuxtConfig } = require('nuxt/config')

module.exports = defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  extends: ['@nuxt/ui-pro'],

  modules: ['@pinia/nuxt', '@nuxt/ui', 'nuxt-mapbox'],

  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
  },

  compatibilityDate: '2024-08-15',
})
