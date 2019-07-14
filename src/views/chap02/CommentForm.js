import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;
const style = { display: 'block', width: '100%' };

export default class CommentForm extends PureComponent {
  // 用于检查类型
  static propTypes = {
    comments: PropTypes.object
  };

  //渲染
  render() {
    return (
      <div className="comment-form">
        <form onSubmit={event => event.preventDefault()}>
          <TextArea style={style} rows={4} />
          <Button type="primary">提交</Button>
        </form>
      </div>
    );
  }
}
