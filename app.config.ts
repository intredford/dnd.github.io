export default defineAppConfig({
  // Configure Content Wind here
  cover: '/favicon.ico',
  prose: {
    h1: {
      icon: 'ph:link'
    },
    h2: {
      icon: 'ph:link'
    }
  },
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  }
})
