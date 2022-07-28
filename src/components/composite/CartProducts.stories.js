import CartProducts from "./CartProducts";

export default {
	component: CartProducts,
	title: "CartProducts",
};

const Template = (args) => <CartProducts {...args} />;

export const Default = Template.bind({});
Default.args = {};
