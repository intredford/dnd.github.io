export default defineNuxtConfig({
  	// https://github.com/nuxt-themes/docus
  	extends: '@nuxt-themes/docus',
	target: "static",

	css: [
		'~/assets/scss/fonts.scss',
		'~/assets/scss/docus-components/badge.scss',
	],

	head: {
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' }
		],
		link: [
			{ 
				rel: 'icon',
				href: `/dnd/favicon.ico` 
			}
		],
		titleTemplate: "%s 🗡 Нож Дануолла"
	},

	content: {
		locales: ['ru']
	},

	app: {
		baseURL: '/dnd/'
	}
})
