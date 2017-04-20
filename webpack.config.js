const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    // disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules:[{
			test: /\.scss$/,
			use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                    	minimize: true
                    }
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
		}]
	},
	plugins: [
		extractSass,
	]
}	