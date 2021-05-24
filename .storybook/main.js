module.exports = {
	"typescript": {
		"reactDocgen": "react-docgen"
	},
	"stories": [
		"../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
	],
	"addons": [
		{
			name: "@storybook/addon-docs",
			options: { transcludeMarkdown: true },
		},
		"@storybook/addon-links",
		"@storybook/addon-essentials"
	],
	"core": {
		"builder": "webpack5"
	}
}