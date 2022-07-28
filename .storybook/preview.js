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

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
