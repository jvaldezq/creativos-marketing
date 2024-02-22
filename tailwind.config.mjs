/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: '#0C823E',
				'primary-v2': '#74A23D',
				secondary: '#F6EDD9',
				'secondary-v2': '#00626C',
				'secondary-50': '#fcf9f3',
				third: '#719A79',
				fourth: '#F3FCF4',
			},
		},
	},
	plugins: [],
}
