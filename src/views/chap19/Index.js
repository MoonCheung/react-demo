import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Button, Steps, Form, Modal } from 'antd';
import styled from 'styled-components';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

class ContentPageDemo extends React.Component{
  // 该组件自身的状态
  state = {
    allValues: {},
    pathName: '',
  }

  // 获取当前步骤
  getCurrentStep = () => {
    const path = this.props.location.pathname;
    return this.getSteps().findIndex(elem => elem.path == path);
  }

  // 获取组件步骤
  getSteps() {
    return [
      {title: '验证邮件', path: '/content/step/1', component: Step1},
      {title: '账号信息', path: '/content/step/2', component: Step2},
      {title: '完成', path: '/content/step/3', component: Step3}
    ]
  }

  handleBack = () => {
    this.setState({
      ...this.state.allValues,
      ...this.props.form.getFieldsValue()
    })
    const currentStep = this.getCurrentStep();
    if(currentStep > 0){
      this.setState({
        pathName: this.getSteps()[currentStep - 1].path
      })
    }
  }

  handleNext = () =>{
    this.setState({
      ...this.state.allValues,
      ...this.props.form.getFieldsValue()
    })
    const currentStep = this.getCurrentStep();
    if(currentStep < this.getSteps().length -1){
      this.setState({
        pathName: this.getSteps()[currentStep + 1].path
      });
    }else{
      Modal.success({
        title: "提交成功"
      });
    }
  }

  // 渲染部分组件
  renderComponent = () => {
    const StepComponent = this.getSteps()[this.getCurrentStep()].component;
    return (
      <StepComponent form={this.props.form} allValues={this.state.allValues} />
    )
  }

  // 渲染函数
  render(){
    if(/^(http(?:|s)\:)*\/\/([^\/]+\/content)$/.test(document.location.href)){
      return (
        <Button type="primary">
          <Link to="/content/step/1">创建账号</Link>
        </Button>
      )
    }
    return (
      <Form>
        <div style={{width: "600px"}}>
          <h1>创建账号</h1>
          <Steps size="small" current={this.getCurrentStep()}>
            {this.getSteps().map((elem,index) => {
              return (
                <Steps.Step key={index} title={elem.title} />
              )
            })}
          </Steps>
        </div>
        <div style={{ margin: "40px 0" }}>
          <Route path="/content/step/:stepId" 
                 render={this.renderComponent} />
        </div>
        <div>
          <Button disabled={this.getCurrentStep() == 0}
                  onClick={this.handleBack}
                  href={this.state.pathName}
                  style={{ marginRight: "20px" }}>
            上一步
          </Button>
          <Button type="primary" 
                  onClick={this.handleNext} 
                  href={this.state.pathName}>
            {this.getCurrentStep() === this.getSteps().length - 1
              ? "完成"
              : "下一步"}
          </Button>
        </div>
      </Form>
    )
  }
};

export default Form.create({})(ContentPageDemo);