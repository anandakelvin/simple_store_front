import Category from "./Category";

export default {
	component: Category,
	title: "Category",
};

const Template = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = {
	category: {
		name: "men",
	},
};
