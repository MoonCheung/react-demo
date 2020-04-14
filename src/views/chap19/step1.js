import React from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import FormBuilder from '../chap18/FormBuilder';

const Option = Select.Option;

const formMeta = {
  colon: true,
  column: 1,
  elements: [{
    key: 'email',
    label: '邮箱',
    widget: Input
  }]
}

// step1 组件
class Step1 extends React.Component{
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

export default Step1;