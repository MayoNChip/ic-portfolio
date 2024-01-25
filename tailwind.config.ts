import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"black-1": "#152122",
				"black-2": "#0E1813",
				main: "#08A4BD",
				// main: "#ACC196",
				"main-dark": "#05798A",
				secondary: "#B9BAA3",
				accent: "#A22C29",
				"semi-light": "#B9BAA3",
				light: "#D6D5C9",
			},
			backgroundImage: {
				mainBG: "url('/public/wave-haikei.png')",
			},
			animation: {
				marquee: "marquee 25s linear infinite",
				marquee2: "marquee2 25s linear infinite",
				"animation-pause": "animation-play-state: paused",
				slideDown: "slideDown 300ms ease-out",
				slideUp: "slideUp 300ms ease-out",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				slideDown: {
					"0%": { opacity: "0", transform: "translateY(-10%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideUp: {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(-10%)" },
				},
			},
		},
		textShadow: {
			sm: "0px 1px 4px var(--tw-shadow-color)",
			DEFAULT: "0 2px 4px var(--tw-shadow-color)",
			lg: "0 4px 8px var(--tw-shadow-color)",
		},
	},
	plugins: [],
};
export default config;
