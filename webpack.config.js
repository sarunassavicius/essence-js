const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const config = {
        mode: argv.mode,
        context: __dirname + "/Application",
        entry: "./Essence.ts",
        output: {
            filename: "../bin/essence.js",
            libraryTarget: "umd"
        },

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                { test: /\.tsx?$/, loader: "ts-loader" },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            ]
        },

        plugins: []
    }

    if (argv.mode === "development") {
        config.devtool = "source-map";
    }

    if (argv.mode === "production") {
        config.output = {
            filename: "../dist/essence.js",
            libraryTarget: "umd"
        };
        config.plugins = [
            new CopyWebpackPlugin([
                { from: "./../typings.d.ts", to: "typings.d.ts", toType: "file" }
            ])
        ];
        //TODO: minify / ulglify
    }

    return config;
};