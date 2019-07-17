import React from 'react';
import { bindActionCreators, createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import { Button } from 'antd';


// 存储初始化状态
const initialState = {
  count: 0
};

//counter样式表
const style = { display: "inline-block", margin: "0 10px" }

// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return {count: state.count + 1};
    case "MINUS_ONE":
      return {count: state.count - 1};
    case "CUSTOM_COUNT": 
      return {
        count: state.count + action.payload.count
      };
    default: 
      break;
  }
  return state;
};

// create store 
const store = createStore(counter);

// action creator
// 只需返回一个action
function plusOne(){
  return { 
    type: "PLUS_ONE"
  }
}

function minusOne(){
  return { 
    type: "MINUS_ONE"
  }
}

export class Counter extends React.Component {
  render(){
    const { count, plusOne, minusOne} = this.props;
    return(
      <div className="counter">
        <Button type="primary" onClick={minusOne}>-</Button>
        <span style={style}>{count}</span>
        <Button type="primary" onClick={plusOne}>+</Button>
      </div>
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({plusOne,minusOne}, dispatch)
}
// 函数的作用是:将React组件连接到Redux存储。
const ConnectedCounter = connect(mapStateToProps,mapDispatchToProps)(Counter)

export default class CounterSample extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    )
  }
}