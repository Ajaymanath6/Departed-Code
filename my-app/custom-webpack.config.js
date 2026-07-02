const path = require('path');

// Prevent webpack from walking up to /home/mis/node_modules (mixed Angular 14/19)
// which breaks this Angular 15 app with signal/untracked import errors.
module.exports = (webpackConfig) => {
  webpackConfig.resolve = webpackConfig.resolve || {};
  webpackConfig.resolve.modules = [path.resolve(__dirname, 'node_modules')];
  webpackConfig.resolve.symlinks = false;
  return webpackConfig;
};
