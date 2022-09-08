import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Nuxt3 SSR Starter',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'keywords'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: []
  },

  css: ['assets/scss/index.scss'],

  // buildModules
  buildModules: ['@pinia/nuxt'],

  vite: {
    css: {
      // https://github.com/nuxt-community/style-resources-module/issues/190
      // https://vite.nuxtjs.org/misc/common-issues/#styleresources
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";'
        }
      }
    }
  },

  router: {
    extendRoutes(routes: any) {
      routes.push({
        path: '*',
        redirect: '/404'
      });
    }
  },

  // publicPath: https://github.com/nuxt/framework/issues/1467
  build: {}
});
