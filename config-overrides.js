/* config-overrides.js */
const { override, fixBabelImports, addBabelPlugin, useBabelRc } = require('customize-cra');
const rewireCssModules = require('react-app-rewire-css-modules');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = override(
  useBabelRc(),
  addBabelPlugin(
    //启用ES7的修改器语法（babel 7), 还有{ "legacy": true }一定不能掉，否则报错
    ['@babel/plugin-proposal-decorators', { legacy: true }]
  ),
  //antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
);

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  //css模块化
  config = rewireCssModules(config, env);
  //配置别名
  config.resolve.alias = {
    '@': resolve('src')
  };
  return config;
};
