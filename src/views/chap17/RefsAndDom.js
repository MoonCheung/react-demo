import React from 'react';
import { Input, Button } from 'antd';

class RefsAndDom extends React.Component {
  // 构造器
  constructor() {
    super(...arguments);
    // 创建一个 ref 来存储 myRef 的 DOM 元素
    this.myRef = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  //方法函数
  focusTextInput = e => {
    e.preventDefault();
    this.myRef.current.focus();
    let val = this.myRef.current.state.value;
    console.log(val);
  };

  render() {
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
          ref={this.myRef}
        />
        <Button type="primary" onClick={this.focusTextInput}>
          Focus
        </Button>
      </div>
    );
  }
}

export default RefsAndDom;
