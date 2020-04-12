import React from 'react';
import RefsAndDom from './RefsAndDom';
import RefsAndDom1 from './RefsAndDom1';
import RefsAndClass from './RefsAndClass';

const Header = props => <p>{props.name}</p>;

// 父组件
class RefsDemo extends React.Component {
  // 构造器
  constructor() {
    super(...arguments);
    this.inputVal = null;
    this.inputElement = el => {
      this.inputVal = el;
    };
    this.focusTextInput = el => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.inputVal) {
        this.inputVal.focus();
        let val = this.inputVal.state.value;
        console.log(val);
      }
    };
  }

  // 实例挂载之后调用
  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput(); //打印：undefined
  }

  // 渲染函数
  render() {
    return (
      <div>
        <Header name="为DOM元素添加ref" />
        <RefsAndDom />
        <Header name="为class组件添加Ref" />
        {/* 这是错误，行不通的，不能在函数组件上面使用ref属性，因为没有实例 */}
        {/* <RefsAndClass ref={textInput} /> */}
        {/* 这是正确做法 */}
        <RefsAndClass
          inputRef={this.inputElement}
          submitInput={this.focusTextInput}
        />
        <Header name="回调Refs" />
        <RefsAndDom1 />
      </div>
    );
  }
}

export default RefsDemo;
