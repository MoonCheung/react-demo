import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import Async from './containers/Async';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// 导出ReduxSample 函数
export default class ReduxSample extends Component {
  render() {
    return (
      <Provider store={store}>
        <Async />
      </Provider>
    );
  }
}
