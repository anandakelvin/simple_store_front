import ProductDetails from "./ProductDetails";

export default {
	component: ProductDetails,
	title: "ProductDetails",
};

const Template = (args) => <ProductDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
	product: {
		id: "ps-5",
		name: "PlayStation 5",
		inStock: false,
		gallery: [
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
			"https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
			"https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
		],
		brand: "Sony",
		prices: [
			{
				amount: 844.02,
				currency: {
					symbol: "$",
				},
			},
			{
				amount: 606.67,
				currency: {
					symbol: "£",
				},
			},
			{
				amount: 1088.79,
				currency: {
					symbol: "A$",
				},
			},
			{
				amount: 91147.25,
				currency: {
					symbol: "¥",
				},
			},
			{
				amount: 63826.91,
				currency: {
					symbol: "₽",
				},
			},
		],
		attributes: [
			{
				name: "Color",
				type: "swatch",
				items: [
					{
						id: "Green",
						displayValue: "Green",
						value: "#44FF03",
					},
					{
						id: "Cyan",
						displayValue: "Cyan",
						value: "#03FFF7",
					},
					{
						id: "Blue",
						displayValue: "Blue",
						value: "#030BFF",
					},
					{
						id: "Black",
						displayValue: "Black",
						value: "#000000",
					},
					{
						id: "White",
						displayValue: "White",
						value: "#FFFFFF",
					},
				],
			},
			{
				name: "Capacity",
				type: "text",
				items: [
					{
						id: "512G",
						displayValue: "512G",
						value: "512G",
					},
					{
						id: "1T",
						displayValue: "1T",
						value: "1T",
					},
				],
			},
		],
	},
};
