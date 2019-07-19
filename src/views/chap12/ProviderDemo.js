import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// React v16.3.0 之前的提供者模式
// TODO: 需要实现 getChildContext 方法，用于返回“上下文”的数据；
// TODO: 需要定义 childContextTypes 属性，声明“上下文”的结构。

class ThemeProvider extends React.Component {
  //普通函数
  getChildContext() {
    return {
      theme: this.props.value
    };
  }
  //渲染函数
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.object
};

class Subject extends React.Component {
  //渲染函数
  render() {
    const { mainColor } = this.context.theme;
    return <h1 style={{ color: mainColor }}>{this.props.children}</h1>;
  }
}

Subject.contextTypes = {
  theme: PropTypes.object
};

const Paragraph = (props, context) => {
  const { textColor } = context.theme;
  return <p style={{ color: textColor }}>{props.children}</p>;
};

Paragraph.contextTypes = {
  theme: PropTypes.object
};

const Page = () => (
  <div>
    <h6>React v16.3.0 之前的提供者模式</h6>
    <Subject>这是标题</Subject>
    <Paragraph>这是正文</Paragraph>
  </div>
);

const ProviderDemo = () => (
  <ThemeProvider value={{ mainColor: 'orange', textColor: 'blue' }}>
    <Page />
  </ThemeProvider>
);

export default ProviderDemo;
