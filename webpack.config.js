const path = require('path');

module.exports = {
  entry: {
    main: './app/index.js'
  },
  output: {
    path: path.resolve(__dirname + '/public'),
    filename: 'bundle.js'
  },
  module: {
      rules:[
        {
          use: 'babel-loader',
          test: /\.js$/, //se testearán todos los archivos con extensión js que encuentreen la aplicación
          exclude: /node_modules/ //sirve para no tomar los arcihvos en la carperta node_modules
        },
        {
          test: /\.(png|jpg|gif)$/i, //para poder testear imageness
          use: 'file-loader',
        }
      ]
  }
  
};
