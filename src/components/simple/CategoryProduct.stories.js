import CategoryProduct from "./CategoryProduct";

export default {
	component: CategoryProduct,
	title: "CategoryProduct",
};

const Template = (args) => <CategoryProduct {...args} />;

export const Default = Template.bind({});
Default.args = {
	product: {
		id: "ps-5",
		name: "PlayStation 5",
		inStock: true,
		brand: "Sony",
		gallery: [
			"https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
			"https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
			"https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
			"https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
			"https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
		],
		prices: [
			{
				currency: {
					label: "USD",
				},
				amount: 844.02,
			},
			{
				currency: {
					label: "GBP",
				},
				amount: 606.67,
			},
			{
				currency: {
					label: "AUD",
				},
				amount: 1088.79,
			},
			{
				currency: {
					label: "JPY",
				},
				amount: 91147.25,
			},
			{
				currency: {
					label: "RUB",
				},
				amount: 63826.91,
			},
		],
	},
};
