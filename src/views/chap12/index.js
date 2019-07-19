import React from 'react';
import ProviderDemo from './ProviderDemo';
import ContextDemo from './ContextDemo';

class Provider extends React.Component {
  render() {
    return (
      <div>
        <ProviderDemo />
        <ContextDemo />
      </div>
    );
  }
}

export default Provider;
