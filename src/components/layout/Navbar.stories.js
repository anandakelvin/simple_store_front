import Navbar from "./Navbar";

export default {
	component: Navbar,
	title: "Navbar",
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
