const path = require( 'path' );

module.exports = {

    // bundling mode
    mode: 'production',

    // entry files
    entry: './public/demo.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'public', 'dist'),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: "public/tsconfig.json"
                    }
                },
                exclude: /node_modules/,
            }
        ]
    }
};
