import React from 'react';
import MobxCounter from './MobxCounter';
import CounterStore from './CounterStore';

class MobxDemo extends React.Component {
  render() {
    return (
      <div>
        <MobxCounter />
        <CounterStore />
      </div>
    );
  }
}

export default MobxDemo;
