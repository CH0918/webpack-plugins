const path = require('path');
const DonePlugin = require('./plugins/DonePlugin');
module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  plugins: [new DonePlugin()],
};
