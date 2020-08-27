import React from 'react';

const getUserName = () => {
  const value = /uid=([^;]+)/.exec(document.cookie);
  return value && decodeURIComponent(value[1]);
};

const Login = Component => {
  const newComponent = props => {
    const userName = getUserName();
    if (userName) {
      // TODO: 驼峰命名
      return <Component {...props} userName={userName} />;
    } else {
      return null;
    }
  };
  return newComponent;
};

// const LoginAndLogout = (ComponentForLogin, ComponentForLogout) => {
//   const newComponent = props => {
//     if (getUserName()) {
//       return <ComponentForLogin {...props} />;
//     } else {
//       return <ComponentForLogout {...props} />;
//     }
//   };

//   return newComponent;
// };

export default Login;
