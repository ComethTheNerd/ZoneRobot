var path = require('path');
var webpack = require('webpack');

const config  = {
  mode: 'production',
  entry: './build/dist/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'scripts'),
    filename: 'zone.bundle.js'
  }
};

module.exports = config;