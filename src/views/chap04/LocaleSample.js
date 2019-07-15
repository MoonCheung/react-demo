import React from 'react';
import { Button } from 'antd';

const enStrings = {
  submit: 'Submit',
  cancel: 'Cancel'
}

const cnStrings = {
  submit: '提交',
  cancel: '返回'
}

// 为当前的 theme 创建一个 context（“enStrings”为默认值）。
const LocaleContext = React.createContext(enStrings)

class LocaleProvider extends React.Component {
  // 状态
  state = {
    locale: cnStrings
  }

  toggleLocale = () => {
    const chglocale = this.state.locale === enStrings
      ? cnStrings
      : enStrings;
    this.setState({
      locale: chglocale
    })
  }
  // 渲染
  render(){
    return (
      <LocaleContext.Provider value={this.state.locale}>
        <Button type="primary" onClick={this.toggleLocale}>切换语言</Button>
        {this.props.children}
      </LocaleContext.Provider>
    )
  }
}

class LocaleButtons extends React.Component {
  //渲染
  render(){
    return (
      <LocaleContext.Consumer>
        {locale => (
          <div>
            <Button>{locale.submit}</Button>&nbsp;
            <Button>{locale.cancel}</Button>
          </div>
        )}
      </LocaleContext.Consumer>
    )
  }
}

export default () => (
  <div>
    <LocaleProvider>
      <div>
        <br/>
        <LocaleButtons />
      </div>
    </LocaleProvider>
    <br/>
    <LocaleButtons />
  </div>
)
