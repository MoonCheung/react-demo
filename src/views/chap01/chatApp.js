import React from 'react';
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

  //该方法函数
  handleInput = event => {
    this.setState({
      inputMsg: event.target.value
    });
  };

  //该方法函数
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
          <input
            type="text"
            value={this.state.inputMsg}
            onChange={this.handleInput}
          />
          <button onClick={this.handleSend}>提交</button>
        </div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

export default withTimer(ChatApp);
