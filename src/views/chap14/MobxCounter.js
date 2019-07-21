import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import CounterView from './CounterView';

@observer // this decorator is must
class MobxCounter extends React.Component {
  // 观察者
  @observable count = 0;

  //增量
  @action
  onIncrement = () => {
    this.count++;
  };

  //减量
  @action
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

export default MobxCounter;
