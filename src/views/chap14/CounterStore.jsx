import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import CounterView from './CounterView';

const store = observable({
  count: 0
});
store.increment = function() {
  this.count++;
};
store.decrement = function() {
  this.count--;
};

// 不启用装饰器语法，可利用MobX 内置的工具 decorate 来对类和对象进行装饰。
const CounterStore = observer(
  class Counter extends React.Component {
    //增量
    onIncrement = () => {
      store.increment();
    };
    //减量
    onDecrement = () => {
      store.decrement();
    };

    //在组件卸载以及销毁之前直接调用
    componentWillUpdate() {
      console.log('#enter componentWillUpdate');
    }
    //渲染函数
    render() {
      return (
        <CounterView
          caption="With external state"
          count={store.count}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      );
    }
  }
);

export default CounterStore;
