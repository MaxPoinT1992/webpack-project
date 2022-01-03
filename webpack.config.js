const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

let mode = "development";

let target = "web";

if (process.env.NODE_ENV === "production"){
    mode = "production"
    target="browserslist"
}

module.exports = {
    mode: mode,
target:target,

entry: "./src/index.js",

 output:{
     path:path.resolve(__dirname,"dist"),
     assetModuleFilename:"images/[hash][ext][query]"
 },
    module:{
        rules:[
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
                type:"asset"
            },
            {
                test:/\.s?css$/i,
                use: [
                    {loader:MiniCssExtractPlugin.loader,
                    options:{publicPath:""}}
                    , "css-loader", "sass-loader"],
            },
            {
                test:/\.jsx?$/,
                exclude:/node_module/,
                use:{
                    loader: "babel-loader"
                }
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
        template:"./src/index.html",
    }),
    new ReactRefreshWebpackPlugin()],

    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool:"source-map",
    devServer: {
        contentBase: "./dist",
        hot:true
    }

}