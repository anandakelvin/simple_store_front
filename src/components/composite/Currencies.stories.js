import Currencies from "./Currencies";
import * as CurrencyStories from "../simple/Currency.stories";

export default {
	component: Currencies,
	title: "Currencies",
};

const Template = (args) => <Currencies {...args} />;

export const Default = Template.bind({});
Default.args = {
	currencies: [CurrencyStories.Default.args.currency],
};
