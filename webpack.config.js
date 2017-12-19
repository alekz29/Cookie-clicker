const path = require('path')

const distDir = path.resolve(__dirname,'dist');

module.exports={
    entry:'./game/index.js',
    output:{
        path:distDir,
        filename:'boundle.js'
    },
    module:{
        loaders:[{
            exclude:'/node_modules/',
            loader:'babel-loader'
        }]
    },
    devServer: {
        contentBase: distDir
    }
}