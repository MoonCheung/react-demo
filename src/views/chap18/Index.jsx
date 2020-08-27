import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

// NOTE: 不编写class的情况下使用state以及其他react的特性
const incrAndDecr = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  // componentDidMount、componentDidUpdate、componentWillUnmount
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  // 渲染
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        增量
      </Button>
      &nbsp;&nbsp;
      <Button type="primary" disabled={count === 0} onClick={() => setCount(count - 1)}>
        减量
      </Button>
    </div>
  );
};

export default incrAndDecr;
