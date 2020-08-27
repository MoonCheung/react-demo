import React, { Component } from 'react';

export default class Clock extends Component {
  //构造函数
  constructor(props) {
    super(props);
    console.log('Clock constructed!!!');
    this.state = {
      date: new Date(),
      msg: 'Hello React!!!'
    };
  }
  //在组件挂载后立即调用
  componentDidMount() {
    console.log('Clock did mount');
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  //在组件卸载以及销毁之前直接调用
  componentWillUnmount() {
    console.log('Clock will unmount');
    clearInterval(this.timerID);
  }
  //更新DOM之后会被立即调用
  componentDidUpdate() {
    console.log('Clock did update');
  }

  //匿名函数
  tick() {
    this.setState({
      date: new Date()
    });
  }
  //渲染函数
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
