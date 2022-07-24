import Categories from "./Categories";
import * as CategoryStories from "../simple/Category.stories";

export default {
	component: Categories,
	title: "Categories",
};

const Template = (args) => <Categories {...args} />;

export const Default = Template.bind({});
Default.args = {
	categories: [
		CategoryStories.Default.args.category,
		CategoryStories.Default.args.category,
		CategoryStories.Default.args.category,
	],
};
