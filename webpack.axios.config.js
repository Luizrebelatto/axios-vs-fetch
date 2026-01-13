const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/services/axiosService/index.js',
  output: {
    filename: 'axios.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};