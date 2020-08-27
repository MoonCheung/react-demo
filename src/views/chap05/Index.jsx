import React, { Component } from 'react';
import PureRedux from './PureRedux';
import CounterSample from './containers/index';

export default class ReduxDemo extends Component {
  render() {
    return (
      <div>
        <PureRedux />
        <CounterSample />
      </div>
    );
  }
}
