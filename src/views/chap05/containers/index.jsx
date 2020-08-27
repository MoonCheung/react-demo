import React, { Component } from 'react';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { plusOne, minusOne } from '../actions/index';
import counter from '../reducers/index';
import PropTypes from 'prop-types';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Button } from 'antd';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// 创建一个Redux存储，用于存放相关counter的完整状态树。
const store = createStore(counter, applyMiddleware(...middleware));

//counter样式表
const style = { display: 'inline-block', margin: '0 10px' };

export class Counter extends Component {
  constructor() {
    super(...arguments);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
  }

  // 增量方法
  incrementIfOdd() {
    if (this.props.count % 2 !== 0) {
      this.props.plusOne();
    }
  }

  //增量异步方法
  incrementAsync() {
    setTimeout(this.props.plusOne, 1000);
  }

  // 该方法用来渲染
  render() {
    const { count, plusOne, minusOne } = this.props;
    return (
      <div>
        <Button type="primary" onClick={minusOne}>
          -
        </Button>{' '}
        <span style={style}>{count}</span>{' '}
        <Button type="primary" onClick={plusOne}>
          +
        </Button>
        <br />
        <Button type="primary" onClick={this.incrementIfOdd}>
          Increment if odd
        </Button>{' '}
        <Button type="primary" onClick={this.incrementAsync}>
          Increment async
        </Button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  plusOne: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired
};

/**
 * 该函数会处理store存储状态
 * @param {*} state
 */
const mapStateToProps = (state /*, ownProps*/) => ({
  count: state.count
});

/**
 * 该函数会处理派发每个单独函数
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => {
  let bindAction = bindActionCreators({ plusOne, minusOne }, dispatch);
  return {
    ...bindAction,
    dispatch
  };
};
// 该函数自动将许多动作创建者绑定到dispatch()函数,可直接调用它们

// 函数的作用是:将React组件连接到Redux存储。
const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default class CounterSample extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}
