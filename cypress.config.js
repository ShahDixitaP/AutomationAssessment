const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = {
	...(on, config) => {
		const options = {
			webpackOptions: {
				resolve: {
					extensions: [".ts", ".js", ".feature"],
				},
				module: {
					rules: [
						{
							test: /\.feature$/,
							use: [
								{
									loader: "cypress-cucumber-preprocessor/loader",
								},
							],
						},
					],
				},

			},
		};
		on("file:preprocessor", cucumber(options));
		return config;
	},

	e2e: {
		specPattern: "cypress/e2e/**/*.feature",
		supportFile: "cypress/support/e2e.js",
		baseUrl: "https://magento.softwaretestingboard.com", // Adjust the base URL as needed
	},
};
