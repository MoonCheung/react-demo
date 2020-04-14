import React from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import FormBuilder from '../chap18/FormBuilder';

const Option = Select.Option;

const formMeta = {
  colon: true,
  columns: 1,
  elements: [
    { key: "userName", label: "用户名", widget: Input },
    { key: "password", label: "密码", widget: Input, type: "password" },
    { key: "birthday", label: "生日", widget: DatePicker }
  ]
}

// step2 组件
class Step2 extends React.Component{
  // 实例挂载之后调用
  componentDidMount(){
    this.props.form.setFieldsValue(this.props.allValues);
  }
  // 渲染函数
  render(){
    return (
      <FormBuilder meta={formMeta} form={this.props.form} />
    )
  }
}

export default Step2;