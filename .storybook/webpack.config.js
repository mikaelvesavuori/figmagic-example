const path = require("path");

module.exports = ({ config }) => {
	config.resolve.modules.push(path.resolve(__dirname, "../"));
	config.resolve.extensions.push(".js", ".jsx", ".mjs");
	return config;
};
