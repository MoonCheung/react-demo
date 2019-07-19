import React from 'react';
import RenderAll from './RenderAll';
import Login from './Login';
import Auth from './Auth';

class RenderProps extends React.Component {
  render() {
    return (
      <div>
        <RenderAll>{() => <h1>Hello world</h1>}</RenderAll>
        <Login>{({ userName }) => <h1>Hello {userName}</h1>}</Login>
        <Auth
          login={({ userName }) => <h1>Hello {userName}</h1>}
          nologin={() => <h1>Please login</h1>}></Auth>
      </div>
    );
  }
}

export default RenderProps;
