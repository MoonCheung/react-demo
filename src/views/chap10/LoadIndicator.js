import React from 'react';
import LoadingIcon from '@/assets/loading.gif';

const LoadIndicator = Component => {
  const newComponent = props => {
    if (props.value) {
      return <Component {...props} />;
    } else {
      return <img src={LoadingIcon} alt="加载" />;
    }
  };
  return newComponent;
};

export default LoadIndicator;
