import CartProductImage from "./CartProductImage";

export default {
	component: CartProductImage,
	title: "CartProductImage",
};

const Template = (args) => <CartProductImage {...args} />;

export const Default = Template.bind({});
Default.args = {
	gallery: [
		"https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
		"https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
		"https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
		"https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
		"https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
	],
};
