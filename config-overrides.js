/* config-overrides.js */
const {
  override,
  useBabelRc,
  useEslintRc,
  disableEsLint,
  fixBabelImports,
  addWebpackResolve,
  addDecoratorsLegacy
} = require('customize-cra');
const rewireCssModules = require('react-app-rewire-css-modules');
const path = require('path');

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  disableEsLint(),
  //添加装饰器,确保安装了@babel/plugin-proposal-decorators。
  addDecoratorsLegacy(),
  //antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  //配置别名
  addWebpackResolve({
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }),
  (config, env) => {
    config = rewireCssModules(config, env);
    return config;
  }
);
