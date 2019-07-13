import React from 'react';

export default function withTimer(WrapComponent) {
  return class extends React.Component {
    //自身状态
    state = {
      time: new Date()
    };
    //该方法会在组件已经被渲染到DOM挂载
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
    //当DOM中某个组件被删除的时候，执行这些方法卸载
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    // 该方法
    tick() {
      this.setState({
        time: new Date()
      });
    }

    //渲染
    render() {
      return <WrapComponent time={this.state.time} {...this.props} />;
    }
  };
}
