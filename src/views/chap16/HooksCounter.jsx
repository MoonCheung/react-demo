import React, { useReducer } from 'react';
import { Button } from 'antd';

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    default:
      return state;
  }
};

//不采用class类型的组件，以函数形式创建方法进行渲染
const HooksCounter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{count}</h1>
      <Button type="primary" onClick={() => dispatch({ type: 'inc' })}>
        +
      </Button>
      &nbsp;&nbsp;
      <Button type="primary" onClick={() => dispatch({ type: 'dec' })}>
        -
      </Button>
    </div>
  );
};

export default HooksCounter;
