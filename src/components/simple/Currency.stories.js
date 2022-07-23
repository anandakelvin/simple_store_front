import Currency from "./Currency";

export default {
	component: Currency,
	title: "Currency",
};

const Template = (args) => <Currency {...args} />;

export const Default = Template.bind({});
Default.args = {
	currency: {
		symbol: "$",
		label: "USD",
	},
};
