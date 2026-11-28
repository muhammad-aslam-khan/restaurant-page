import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: "production", // "Production" or "development"
	entry: {
		bundle: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		clean: true,
		assetModuleFilename: "[name][ext]",
	},
	devtool: false, //or just "source-map". For production change it to false
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		watchFiles: ["./src/template.html"],
		port: 3300,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/i,
				use: ["html-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Good Fork",
			filename: "index.html",
			template: "src/template.html",
		}),
	],
};
