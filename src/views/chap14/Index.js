import React from 'react';
import MobxCounter from './MobxCounter';
import CounterStore from './CounterStore';
import CounterActions from './CounterActions';

class MobxDemo extends React.Component {
  render() {
    return (
      <div>
        <MobxCounter />
        <CounterStore />
        <CounterActions />
      </div>
    );
  }
}

export default MobxDemo;
