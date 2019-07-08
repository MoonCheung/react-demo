/* config-overrides.js */
// const { injectBabelPlugin } = require('react-app-rewired');
const { override, fixBabelImports, addBabelPlugin } = require('customize-cra');
const rewireCssModules = require('react-app-rewire-css-modules');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = override(
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
