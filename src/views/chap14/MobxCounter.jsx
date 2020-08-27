import React from 'react';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';
import CounterView from './CounterView';

// 不启用装饰器语法，可利用MobX 内置的工具 decorate 来对类和对象进行装饰。
// @observer
const MobxCounter = observer(
  class Counter extends React.Component {
    // 观察者
    count = 0;

    //增量
    onIncrement = () => {
      this.count++;
    };

    //减量
    onDecrement = () => {
      this.count--;
    };

    //在组件卸载以及销毁之前直接调用
    componentWillUpdate() {
      console.log('#enter componentWillUpdate');
    }

    //渲染函数
    render() {
      return (
        <CounterView
          count={this.count}
          caption="With strict mode"
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      );
    }
  }
);

decorate(MobxCounter, {
  count: observable,
  onIncrement: action,
  onDecrement: action
});

export default MobxCounter;
