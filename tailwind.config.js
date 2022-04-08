module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				book: ["Futura-main", "sans-serif"],
				medium: ["Futura-bold", "sans-serif"],
				script: ["Futura-italic", "sans-serif"],
			},
			screens: {
				sm: "640px",
				md: "825px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [],
};
