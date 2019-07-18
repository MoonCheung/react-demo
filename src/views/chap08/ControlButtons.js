import React from 'react';
import { Button } from 'antd';

const ControlButtons = ({ activated, onStart, onPause, onReset, onSplit }) => {
  //TODO: 实现ControlButtons
  if (activated) {
    return (
      <div>
        <Button type="primary" onClick={onSplit}>
          计次
        </Button>
        &nbsp;
        <Button type="primary" onClick={onPause}>
          停止
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button type="primary" onClick={onReset}>
          复位
        </Button>
        &nbsp;
        <Button type="primary" onClick={onStart}>
          启动
        </Button>
      </div>
    );
  }
};

export default ControlButtons;
