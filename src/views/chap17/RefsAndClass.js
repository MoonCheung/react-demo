import React from 'react';
import { Input, Button } from 'antd';

// 无状态组件
class RefsAndClass extends React.Component {
  //默认prop值
  static defaultProps = {
    inputRef: () => {},
    submitInput: () => {}
  };
  render() {
    const { inputRef, submitInput } = this.props;
    return (
      <div
        style={{
          width: '500px',
          display: 'inline-block'
        }}>
        <Input
          style={{
            width: '200px'
          }}
          type="text"
          ref={inputRef}
        />
        <Button type="primary" onClick={submitInput}>
          Focus
        </Button>
      </div>
    );
  }
}

export default RefsAndClass;
