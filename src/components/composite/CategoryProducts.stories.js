import CategoryProducts from "./CategoryProducts";
import * as CategoryProductStories from "../simple/CategoryProduct.stories";

export default {
	component: CategoryProducts,
	title: "CategoryProducts",
};

const Template = (args) => <CategoryProducts {...args} />;

export const Default = Template.bind({});
Default.args = {
	products: [
		CategoryProductStories.Default.args.product,
		CategoryProductStories.Default.args.product,
		CategoryProductStories.Default.args.product,
	],
};
