import React from 'react';
import { Input, Button } from 'antd';

class RefsAndDom1 extends React.Component {
  // 构造器
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) {
        this.textInput.focus();
        let val = this.textInput.state.value;
        console.log(val);
      }
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
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
          ref={this.setTextInputRef}
        />
        <Button type="primary" onClick={this.focusTextInput}>
          Focus
        </Button>
      </div>
    );
  }
}

export default RefsAndDom1;
