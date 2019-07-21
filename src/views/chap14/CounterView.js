import React from 'react';
import { Button } from 'antd';

//无状态普通函数
const CounterView = ({
  count,
  caption = 'Count',
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>
      {caption}: {count}
    </h1>
    <Button type="primary" onClick={onIncrement}>
      +
    </Button>
    &nbsp;&nbsp;
    <Button type="primary" onClick={onDecrement}>
      -
    </Button>
  </div>
);
export default CounterView;
