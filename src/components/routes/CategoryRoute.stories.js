import CategoryRoute from "./CategoryRoute";
import * as CategoryStories from "../simple/Category.stories";

export default {
	component: CategoryRoute,
	title: "CategoryRoute",
};

const Template = (args) => <CategoryRoute {...args} />;

export const Default = Template.bind({});
Default.args = {
	category: CategoryStories.Default.args.category,
};
