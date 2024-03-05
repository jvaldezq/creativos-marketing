/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito Variable", "sans-serif"],
			},
			colors: {
				primary: '#01843e',
				'primary-v2': '#74A23D',
				secondary: '#60a511',
				'secondary-v2': '#00626C',
				'secondary-50': '#fcf9f3',
				third: '#0C823F',
				fourth: '#F3FCF4',
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
