import React, { PureComponent } from 'react';
import '@/styles/SnapshotSample.css';

export default class SnapshotSample extends PureComponent {
  //自身状态
  state = {
    messages: []
  };

  //匿名方法函数
  handleNewMessage() {
    this.setState(prev => ({
      messages: [`msg ${prev.messages.length}`, ...prev.messages]
    }));
  }
  //在组件挂载后立即调用
  componentDidMount() {
    for (let i = 0; i < 20; i++) {
      this.handleNewMessage();
    }
    this.interval = window.setInterval(() => {
      if (this.state.messages.length > 200) {
        window.clearInterval(this.interval);
        return; //不再执行下一步
      }
      this.handleNewMessage();
    }, 1000);
  }
  //在组件卸载以及销毁之前直接调用
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  //在渲染输出DOM节点之前调用
  getSnapshotBeforeUpdate() {
    console.log('get snapshot before update');
    return this.rootNode.scrollHeight;
  }
  //更新DOM之后会被立即调用
  componentDidUpdate(prevProps, prevState, scrollHeight) {
    const scrollTop = this.rootNode.scrollTop;
    if (scrollTop < 5) return;
    this.rootNode.scrollTop =
      scrollTop + (this.rootNode.scrollHeight - scrollHeight);
  }
  //渲染函数
  render() {
    return (
      <div className="snapshot-sample" ref={n => (this.rootNode = n)}>
        {this.state.messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    );
  }
}
