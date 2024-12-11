const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.feature'],
    },
    module: {
        rules: [
            {
                test: /\.feature$/,
                use: [
                    {
                        loader: 'cypress-cucumber-preprocessor/loader',
                    },
                ],
            },
        ],
    },
};
