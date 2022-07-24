import Page from "./Page";

export default {
	component: Page,
	title: "Page",
};

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
