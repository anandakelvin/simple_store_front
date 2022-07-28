import ProductAttribute from "./ProductAttribute";

export default {
	component: ProductAttribute,
	title: "ProductAttribute",
};

const Template = (args) => <ProductAttribute {...args} />;

export const Default = Template.bind({});
Default.args = {
	attribute: {
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
};
