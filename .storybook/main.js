module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx)"
	],
	addons: [
    "@storybook/addon-actions",
    "@storybook/addon-controls",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-create-react-app"
	],
};
