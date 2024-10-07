import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			container: {
				center: true, // Centers the container
				padding: {
					DEFAULT: '1rem', // 1rem padding on all screen sizes
					sm: '2rem' // 2rem padding on small screens
				},
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px'
				}
			},
			fontFamily: {
				futura: ['Futura', 'sans-serif'],
				fustat: ['Fustat', 'sans-serif']
			},
			colors: {
				ashgray: '#CAD2C5',
				black: '#000',
				white: '#FFF'
			}
		}
	},

	plugins: []
} as Config;
