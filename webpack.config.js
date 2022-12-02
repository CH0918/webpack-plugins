const path = require('path');
const DonePlugin = require('./plugins/DonePlugin');
const CompressAssetsPlugin = require('./plugins/CompressAssetsPlugin');
const output = path.join(__dirname, './dist');
module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    filename: '[name].js',
    path: output,
  },
  plugins: [new CompressAssetsPlugin({ output: 'zip' })],
};
