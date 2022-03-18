const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-final-project/' : '/',
  pluginOptions: {
    svgSpriteLoader: {
      // directory
      dir: resolve('src/assets/svg'),
      // test rule
      test: /\.svg$/,
      // https://github.com/JetBrains/svg-sprite-loader#configuration
      options: {
        symbolId: '[name]',
      },
    },
  },
};
