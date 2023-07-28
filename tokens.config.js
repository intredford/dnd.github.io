import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    black: '#0B0A0A',
    // Primary is nuxt green
    primary: {
        50: '#ECFFF7',
        100: '#DEFFF1',
        200: '#C3FFE6',
        300: '#86FBCB',
        400: '#3CEEA5',
        500: '#0DD885',
        600: '#00B467',
        700: '#006037',
        800: '#002817',
        900: '#00190F'
    },
	secondary: {
		50: '#FAFAFA',
		100: '#F7F8F7',
		200: '#F5F5F4',
		300: '#E5E6E5',
		400: '#D6D7D5',
		500: '#C6C9C5',
		600: '#B6BAB5',
		700: '#A6ABA6',
		800: '#969C97',
		900: '#868D87',
		950: '#7C837D'
	}
  }
})