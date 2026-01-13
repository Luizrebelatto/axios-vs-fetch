const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/services/fetchService/index.js',
  output: {
    filename: 'fetch.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};