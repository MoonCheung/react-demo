import React, { Fragment } from 'react';

// TODO: 不通过props方式渲染组件之间,可访问作为props的children,将children拷贝一份，有机会篡改这份拷贝，最后可渲染拷贝过children
const TabItem = props => {
  const { active, onClick } = props;
  const tabStyle = {
    minWidth: '100px',
    color: active ? 'orange' : 'blue',
    border: active ? '1px red solid' : '0px'
  };

  return (
    <h1 style={tabStyle} onClick={onClick}>
      {props.children}
    </h1>
  );
};

class Tabs extends React.Component {
  //自身状态
  state = {
    activeIndex: 0
  };

  //渲染函数
  render() {
    //TODO: this.props.children 是一个数组，它将被遍历并为数组中的每个子节点调用该函数。
    const newChildren = React.Children.map(
      this.props.children,
      (child, index) => {
        if (child.type) {
          //TODO: 以 child 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。
          return React.cloneElement(child, {
            active: this.state.activeIndex === index,
            onClick: () =>
              this.setState({
                activeIndex: index
              })
          });
        } else {
          return child;
        }
      }
    );

    return <Fragment>{newChildren}</Fragment>;
  }
}

export default () => (
  <Tabs>
    <TabItem>One</TabItem>
    <TabItem>Two</TabItem>
    <TabItem>Three</TabItem>
  </Tabs>
);
