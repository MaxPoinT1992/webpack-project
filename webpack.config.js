const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

let target = "web";

if (process.env.NODE_ENV === "production"){
    mode = "production"
    target="browserslist"
}

module.exports = {
    mode: mode,
target:target,
 output:{
     assetModuleFilename:"images/[hash][ext][query]"
 },
    module:{
        rules:[
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
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

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool:"source-map",
    devServer: {
        contentBase: "./dist",
        hot:true
    }

}