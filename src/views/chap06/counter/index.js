import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';
import Counter from './components/Counter';
import counter from './reducers/index';

// 创建store
const store = createStore(counter);

export class CounterDemo extends Component {
  render() {
    return (
      <div>
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const ConnectedCounter = connect(mapStateToProps)(CounterDemo);

// 订阅更新UI以响应状态更改。
store.subscribe(() => console.log(store.getState()));
export default class CounterSample extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}
