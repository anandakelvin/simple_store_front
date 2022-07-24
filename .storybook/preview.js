import "../src/index.css";

// eslint-disable-next-line no-extend-native
Object.defineProperty(String.prototype, "capitalize", {
	value: function () {
		return this.charAt(0).toUpperCase() + this.slice(1);
	},
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
