// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt 3 Portfolio',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'tr'
      }
    }
  },
  modules: ['v-wave/nuxt'],
  modules: ['@nuxtjs/color-mode', 'v-wave/nuxt'],
  css: ['@/main.scss', '@/assets/css/transitions.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
