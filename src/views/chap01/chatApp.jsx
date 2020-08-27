import React from 'react';
import { Button, Input } from 'antd';
import withTimer from './withTimer';

class MessageList extends React.PureComponent {
  //渲染
  render() {
    return (
      <ul>
        {this.props.messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    );
  }
}

export class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    //自身状态
    this.state = {
      messages: [],
      inputMsg: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  //该输入input方法
  handleInput = event => {
    this.setState({
      inputMsg: event.target.value
    });
  };

  //该提交方法
  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      //返回合并后得到新数组
      const newMessages = [...this.state.messages, text];
      this.setState({
        messages: newMessages,
        inputMsg: ''
      });
    }
  };

  //渲染
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <div>
          <Input
            style={{ width: 200 }}
            size="small"
            type="text"
            value={this.state.inputMsg}
            onChange={this.handleInput}
          />
          <Button size="small" type="primary" onClick={this.handleSend}>
            提交
          </Button>
        </div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

export default withTimer(ChatApp);
