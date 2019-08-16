import React from 'react';

class Suspense extends React.Component {
  //自身状态
  state = {
    pending: false
  };

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显示降级 UI
    return { pending: true };
  }

  //该生命周期在后代组件抛出错误后被调用，用于记录错误之类情况
  componentDidCatch(error) {
    //检测Promise类型的简便方法
    if (typeof error.then === 'function') {
      error.then(() =>
        this.setState({
          pending: false
        })
      );
    }
  }
  //渲染函数
  render() {
    return this.state.pending ? null : this.props.children;
  }
}

export default Suspense;
