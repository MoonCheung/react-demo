import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

class Counter extends Component {
  // 构造器
  constructor() {
    super(...arguments);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  //渲染
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        Clicked: {value} times
        <br />
        <Button type="primary" onClick={onIncrement}>
          +
        </Button>{' '}
        <Button type="primary" onClick={onDecrement}>
          -
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
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
