let path = require('path');



module.exports = 
{

	entry: './assets/js/script.js',
    output:
    {

	    path: path.join(__dirname, './dist'),
	    filename: 'bundle.js',
        publicPath: './dist/'

    },

    module:
    {

        rules:
        [
            {
    
                test: /\.(js)$/,
                exclude:/(node_modules)/,
    
                use:
                {
    
                    loader:'babel-loader',
                    options:
                    {
    
                        presets:['@babel/preset-env']
    
                    }
    
                }
    
            },

            {

                test:/ \.(jpe?g|png|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:
                        {
                            limit:1000,
                            outputPath:'./images'
                        }
                    },
                    'image-webpack-loader'

                ]
            },
            {
                use: ExtractTextPlugin.extract
                ({
                    use:'css-loader'
                }),
                test:/\.css$/
            }
            
        ]
    
    },
    plugins:
    [
        new ExtractTextPlugin('./css/style.css')
    ]

}