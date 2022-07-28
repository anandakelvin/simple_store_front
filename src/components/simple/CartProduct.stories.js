import CartProduct from "./CartProduct";

export default {
	component: CartProduct,
	title: "CartProduct",
};

const Template = (args) => <CartProduct {...args} />;

export const Default = Template.bind({});
Default.args = {
	cartProduct: {
		product: "ps-5",
		quantity: 1,
		selectedAttributes: [
			{ name: "Color", selectedItem: "Green" },
			{ name: "Capacity", selectedItem: "512G" },
		],
	},
};
