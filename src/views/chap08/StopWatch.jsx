import React, { Fragment } from 'react';
import styled from 'styled-components';
import ControlButtons from './ControlButtons';
import MajorClock from './MajorClock';
import SplitTimes from './SplitTimes';

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: palevioletred;
`;

class StopWatch extends React.Component {
  //构造函数
  // constructor() {
  //   //TODO：记得通过super调用父类React.Component
  //   super(...arguments);
  //   // state状态
  //   this.state = {
  //     isStarted: false,
  //     startTime: null,
  //     currentTime: null,
  //     splits: []
  //   };
  // }

  state = {
    isStarted: false,
    startTime: null,
    currentTime: null,
    splits: []
  };

  //TODO: StopWatch 需要给 ControlButtons 传递四个函数类型的 props，分别是 onStart、onPause、onReset 和 onSplit
  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date(),
      currentTime: new Date()
    });
    this.intervalHandle = setInterval(() => {
      this.setState({
        currentTime: new Date()
      });
    }, 1000 / 60);
  };

  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false
    });
  };

  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: []
    });
  };

  onSplit = () => {
    this.setState({
      //返回合并后得到新数组
      splits: [
        ...this.state.splits,
        this.state.currentTime - this.state.startTime
      ]
    });
  };

  //渲染函数
  render() {
    return (
      <Fragment>
        {/* TODO: 尽量不要在JSX中写内联函数，很不恰当 */}
        <Title>
          秒表
          <span role="img" aria-label="sheep">
            💅
          </span>
        </Title>
        <MajorClock
          milliseconds={this.state.currentTime - this.state.startTime}
        />
        <ControlButtons
          activated={this.state.isStarted}
          onStart={this.onStart}
          onPause={this.onPause}
          onReset={this.onReset}
          onSplit={this.onSplit}
        />
        <SplitTimes value={this.state.splits} />
      </Fragment>
    );
  }
}

export default StopWatch;
