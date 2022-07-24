import Category from "./Category";

export default {
	component: Category,
	title: "Category",
};

const Template = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = {
	category: {
		name: "all",
		products: [
			{
				id: "huarache-x-stussy-le",
				name: "Nike Air Huarache Le",
				inStock: true,
				brand: "Nike x Stussy",
				gallery: [
					"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
					"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
					"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
					"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
					"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
				],
				prices: [
					{
						currency: {
							symbol: "$",
						},
						amount: 144.69,
					},
					{
						currency: {
							symbol: "£",
						},
						amount: 104,
					},
					{
						currency: {
							symbol: "A$",
						},
						amount: 186.65,
					},
					{
						currency: {
							symbol: "¥",
						},
						amount: 15625.24,
					},
					{
						currency: {
							symbol: "₽",
						},
						amount: 10941.76,
					},
				],
			},
			{
				id: "jacket-canada-goosee",
				name: "Jacket",
				inStock: true,
				brand: "Canada Goose",
				gallery: [
					"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
					"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
					"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
					"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
					"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
					"https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
					"https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
				],
				prices: [
					{
						currency: {
							symbol: "$",
						},
						amount: 518.47,
					},
					{
						currency: {
							symbol: "£",
						},
						amount: 372.67,
					},
					{
						currency: {
							symbol: "A$",
						},
						amount: 668.83,
					},
					{
						currency: {
							symbol: "¥",
						},
						amount: 55990.46,
					},
					{
						currency: {
							symbol: "₽",
						},
						amount: 39207.96,
					},
				],
			},
			{
				id: "ps-5",
				name: "PlayStation 5",
				inStock: false,
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
							symbol: "$",
						},
						amount: 844.02,
					},
					{
						currency: {
							symbol: "£",
						},
						amount: 606.67,
					},
					{
						currency: {
							symbol: "A$",
						},
						amount: 1088.79,
					},
					{
						currency: {
							symbol: "¥",
						},
						amount: 91147.25,
					},
					{
						currency: {
							symbol: "₽",
						},
						amount: 63826.91,
					},
				],
			},
			{
				id: "xbox-series-s",
				name: "Xbox Series S 512GB",
				inStock: false,
				brand: "Microsoft",
				gallery: [
					"https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
					"https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
					"https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
					"https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
					"https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
				],
				prices: [
					{
						currency: {
							symbol: "$",
						},
						amount: 333.99,
					},
					{
						currency: {
							symbol: "£",
						},
						amount: 240.07,
					},
					{
						currency: {
							symbol: "A$",
						},
						amount: 430.85,
					},
					{
						currency: {
							symbol: "¥",
						},
						amount: 36068.27,
					},
					{
						currency: {
							symbol: "₽",
						},
						amount: 25257.22,
					},
				],
			},
			{
				id: "apple-imac-2021",
				name: "iMac 2021",
				inStock: true,
				brand: "Apple",
				gallery: [
					"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
				],
				prices: [
					{
						currency: {
							symbol: "$",
						},
						amount: 1688.03,
					},
					{
						currency: {
							symbol: "£",
						},
						amount: 1213.34,
					},
					{
						currency: {
							symbol: "A$",
						},
						amount: 2177.57,
					},
					{
						currency: {
							symbol: "¥",
						},
						amount: 182294.51,
					},
					{
						currency: {
							symbol: "₽",
						},
						amount: 127653.82,
					},
				],
			},
			{
				id: "apple-iphone-12-pro",
				name: "iPhone 12 Pro",
				inStock: true,
				brand: "Apple",
				gallery: [
					"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
				],
				prices: [
					{
						currency: {
							symbol: "$",
						},
						amount: 1000.76,
					},
					{
						currency: {
							symbol: "£",
						},
						amount: 719.34,
					},
					{
						currency: {
							symbol: "A$",
						},
						amount: 1290.99,
					},
					{
						currency: {
							symbol: "¥",
						},
						amount: 108074.6,
					},
					{
						currency: {
							symbol: "₽",
						},
						amount: 75680.48,
					},
				],
			},
			{
				id: "apple-airpods-pro",
				name: "AirPods Pro",
				inStock: false,
				brand: "Apple",
				gallery: [
					"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
				],
				prices: [
					{
						currency: {
							symbol: "$",
						},
						amount: 300.23,
					},
					{
						currency: {
							symbol: "£",
						},
						amount: 215.8,
					},
					{
						currency: {
							symbol: "A$",
						},
						amount: 387.3,
					},
					{
						currency: {
							symbol: "¥",
						},
						amount: 32422.38,
					},
					{
						currency: {
							symbol: "₽",
						},
						amount: 22704.14,
					},
				],
			},
			{
				id: "apple-airtag",
				name: "AirTag",
				inStock: true,
				brand: "Apple",
				gallery: [
					"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
				],
				prices: [
					{
						currency: {
							symbol: "$",
						},
						amount: 120.57,
					},
					{
						currency: {
							symbol: "£",
						},
						amount: 86.67,
					},
					{
						currency: {
							symbol: "A$",
						},
						amount: 155.54,
					},
					{
						currency: {
							symbol: "¥",
						},
						amount: 13021.04,
					},
					{
						currency: {
							symbol: "₽",
						},
						amount: 9118.13,
					},
				],
			},
		],
	},
};
