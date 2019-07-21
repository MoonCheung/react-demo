import React from 'react';
import HooksCounter from './HooksCounter';
import CustomCounter from './CustomCounter';

const Header = props => <h5>{props.name}</h5>;

class HoockDemo extends React.Component {
  render() {
    return (
      <div>
        <Header name="Hook API: useReducer" />
        <HooksCounter />
        <Header name="Hook API: useState + useContext + useEffect" />
        <CustomCounter />
      </div>
    );
  }
}

export default HoockDemo;
