export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    ['nuxt-module-cli-shortcuts', {
      rawMode: true,
    }],
    'unplugin-turbo-console/nuxt',
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],
  eslint: {
    config: {
      standalone: false,
    }
  }
})
