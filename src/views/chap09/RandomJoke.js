import React from 'react';
import Joke from './Joke';

// TODO: 把获取和管理数据的逻辑放在父组件，也就是聪明组件

export default class RandomJoke extends React.Component {
  //状态
  state = {
    joke: 'loading...'
  };

  //渲染函数
  render() {
    return <Joke value={this.state.joke} />;
  }
  //在组件挂载后立即调用
  componentDidMount() {
    fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ joke: json.joke });
      });
  }
}
