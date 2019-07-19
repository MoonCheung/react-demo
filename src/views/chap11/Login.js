import React from 'react';

// 普通函数形式
const getUserName = () => 'MoonCheung';
// 普通函数形式
const Login = props => {
  const userName = getUserName();
  if (userName) {
    const allProps = { userName, ...props };
    return <React.Fragment>{props.children(allProps)}</React.Fragment>;
  } else {
    return null;
  }
};

export default Login;
