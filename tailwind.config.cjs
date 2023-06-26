/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'primary': ['Unica One', 'cursive'],
			'secondary': ['Vollkorn', 'serif'], 
		},
		extend: {
			colors: {
				background: "#fff6fb",
				'text-primary': '#343434',
				'text-secondary': '#484848',
			brand: '#EC7575',
			'brand-secondary': "#F18989"
			}
		},
	},
	plugins: [],
	safelist: [
	]
}
