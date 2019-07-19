import React from 'react';

// 普通函数形式
const getUserName = () => 'MoonCheung';
// 普通函数形式
const Auth = props => {
  const userName = getUserName();
  if (userName) {
    const allProps = { userName, ...props };
    return <React.Fragment>{props.login(allProps)}</React.Fragment>;
  } else {
    return <React.Fragment>{props.nologout(props)}</React.Fragment>;
  }
};

export default Auth;
