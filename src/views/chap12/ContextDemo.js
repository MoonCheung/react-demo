import React from 'react';

// React v16.3.0 之后的提供者模式
const ThemeContext = React.createContext();
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

class Subject extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <h1 style={{ color: theme.mainColor }}>{this.props.children}</h1>
        )}
      </ThemeConsumer>
    );
  }
}

const Paragraph = props => (
  <ThemeConsumer>
    {theme => <p style={{ color: theme.textColor }}>{props.children}</p>}
  </ThemeConsumer>
);

const Page = () => (
  <div>
    <h6>React v16.3.0 之后的提供者模式</h6>
    <Subject>这是标题</Subject>
    <Paragraph>这是正文</Paragraph>
  </div>
);

const ContextDemo = () => (
  //Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。
  <ThemeProvider value={{ mainColor: 'green', textColor: 'red' }}>
    <Page />
  </ThemeProvider>
);

export default ContextDemo;
