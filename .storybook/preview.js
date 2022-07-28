import "../src/index.css";
import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../src/app/store";

addDecorator((story) => <Provider store={store}>{story()}</Provider>);
addDecorator((story) => (
	<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

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
