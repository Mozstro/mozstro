const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      rules: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }]

    });

    return config;
  }
};
