import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import { Button } from 'antd';

//TODO useEffect: Effect Hook 可以让你在函数组件中执行副作用操作, 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
//TODO useContext: 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。

const CustomCounter = () => {
  const [count, setCount] = useState(0);

  //可让你在函数组件中执行副作用操作
  useEffect(() => {
    document.title = count;
  });

  const [width, setWidth] = useState(window.innerWidth); //innerWidth:内部宽度
  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(
    (prevProps, prevState) => {
      console.log('#prevProps', prevProps); //undefined
      console.log('#prevState', prevState); //undefined

      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    },
    [width]
  );

  const theme = useContext(ThemeContext);
  console.log('#theme', theme);

  return (
    <div>
      <h1>{count}</h1>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        +
      </Button>
      &nbsp;&nbsp;
      <Button type="primary" onClick={() => setCount(count - 1)}>
        -
      </Button>
    </div>
  );
};

export default CustomCounter;
