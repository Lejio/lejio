/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			FontFamily: {
				sans: ['CenturyGothic', ...defaultTheme.fontFamily.sans],
			},
			
		},
	},
	plugins: [],
}
