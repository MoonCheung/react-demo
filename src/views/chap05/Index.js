import React from 'react';
import PureRedux from './PureRedux';
import Counter from './Counter';

export default class ReduxDemo extends React.Component {
  render() {
    return (
      <div>
        <PureRedux />
        <Counter />
      </div>
    );
  }
}
