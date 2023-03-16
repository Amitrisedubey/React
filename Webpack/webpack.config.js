const path = require('path');
module.exports = {
    entry:"./src/index.js",

    output: {
        path: path.join(__dirname, 'build'), //folder where the output will be stored,
        filename: "bundle.js",
    },
    mode: "development",
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}