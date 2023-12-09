/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 20 column grid
				20: "repeat(20, minmax(0, 1fr))",
			},
			colors: {
				danger: "#f04438",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
