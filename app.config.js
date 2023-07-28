export default defineAppConfig({
	docus: {
		title: 'Нож Дануолла',
		image: 'http://localhost:3000/favicon.ico',
		aside: {
			level: 0,
			collapsed: false,
			exclude: []
		},
		main: {
			padded: true,
			fluid: false
		},
		header: {
			logo: true,
			showLinkIcon: true,
			exclude: [],
			// fluid: true
		},
		footer: {
			iconLinks: [
				{
					href: 'https://discordapp.com/users/393692914426839040',
					icon: 'simple-icons:discord'
				}
			],
			credits: {
				text: 'Создано с божьей помощью',
			}
		}
	}
})
