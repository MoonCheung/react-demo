import React from "react";
import FormBuilder from "./FormBuilder";
import { Form, Button, Input, DatePicker, Select } from "antd";

const Option = Select.Option;

// 性别选项
const genderOptions = [
  { value: "男", displayName: "男" },
  { value: "女", displayName: "女" }
].map(item => (
  <Option key={item.value} value={item.value}>
    {item.displayName}
  </Option>
));

// 表单数据
const formMeta = {
  colon: true,
  columns: 1,
  elements: [
    {
      key: "userName",
      label: "用户名",
      tooltip: "user name",
      initialValue: "Nate",
      widget: Input,
      required: true
    },
    {
      key: "password",
      label: "密码",
      widget: Input,
      type: "password"
    },
    {
      key: "date",
      label: "生日",
      widget: DatePicker,
      widgetProps: { style: { width: "100%" } }
    },
    {
      key: "gender",
      label: "性别",
      initialValue: "请选择",
      widget: Select,
      children: genderOptions
    },
    {
      key: "phone",
      label: "手机",
      widget: Input,
      required: true,
      rules: [
        {
          pattern: /^\d+$/,
          message: "电话只能包含数字."
        },
        {
          min: 11,
          message: "电话号码长度至少为11"
        }
      ]
    },
    {
      key: "email",
      label: "邮箱",
      widget: Input,
      rules: [
        {
          type: "email",
          message: "请输入有效的电子邮件地址."
        }
      ]
    }
  ]
};

class FormSubmitAntd extends React.Component {
  // 构造函数
  constructor(props){
    // 调用 React 的父类的构造函数：constructor();
    super(props);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //清除表达方法
  resetForm = () => {
    this.props.form.resetFields();
  }

  //提交表单
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  // 渲染函数
  render(){
    return (
      <Form onSubmit={this.handleSubmit}
            layout="horizontal" >
        <FormBuilder meta={formMeta} form={this.props.form} />
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>&nbsp;&nbsp;
          <Button onClick={this.resetForm}>重置</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({})(FormSubmitAntd);