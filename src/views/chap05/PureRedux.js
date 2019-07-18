import React from 'react';
import { Button } from 'antd';
import { createStore, combineReducers } from 'redux';

function run() {
  // 存储初始化状态
  const initialState = {
    count: 0
  };

  // reducer
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case 'PLUS_ONE':
        return { count: state.count + 1 };
      case 'MINUS_ONE':
        return { count: state.count - 1 };
      case 'CUSTOM_COUNT':
        return {
          count: state.count + action.payload.count
        };
      default:
        break;
    }
    return state;
  };

  const todos = (state = {}) => state;

  // 创建store
  const store = createStore(
    //将reduce函数拆分为单独的函数，每个函数管理状态的独立部分。
    combineReducers({
      todos,
      counter
    })
  );

  // action creator
  // 只需返回一个action
  function plusOne() {
    return {
      type: 'PLUS_ONE'
    };
  }

  function minusOne() {
    return {
      type: 'MINUS_ONE'
    };
  }

  function customCount(count) {
    return {
      type: 'CUSTOM_COUNT',
      payload: { count }
    };
  }

  // plusOne = bindActionCreators(plusOne, store.dispatch);
  // 添加subscribe()。它将在任何时候调用一个action，并且状态树的某些部分可能已经更改。然后可以调用getState()来读取回调函数中的当前状态树。
  // 返回应用程序的当前状态树。它等于存储的减速器返回的最后一个值。
  store.subscribe(() => console.log(store.getState()));
  // plusOne();
  store.dispatch(plusOne(1));
  store.dispatch(minusOne());
  store.dispatch(customCount(5));
}

export default () => (
  <div>
    <Button type="primary" onClick={run}>
      Run
    </Button>
    <p>* 请打开控制台查看运行结果</p>
  </div>
);
