const path = require('path')
const DIST_PATH = path.resolve(__dirname, '../dist')

module.exports = {
    entry: {
        app: './lib/index.js',
        framework: ['react', 'react-dom']
    },
    output: {
        filename: "js/bundle.js",
        path: DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: "babel-loader"
            }
        ]
    }
}
