export default defineNuxtConfig({
	target: "static",
	ssr: true,
	baseURL: "/dnd/",
	extends: 'content-wind',

	head: {
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' }
		],
		// title: "%s 🗡 Нож Дануолла" — задан в ~layouts/default.vue
	},
})
