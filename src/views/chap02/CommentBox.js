import React, { PureComponent } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import withTimer from '../chap01/withTimer';
import '@/styles/CommentBox.scss';

const comments = [
  {
    author: 'React',
    content: 'hello React'
  },
  {
    author: 'Koa',
    content: 'hello Koa node 框架'
  },
  {
    author: 'Vue',
    content: 'hello Vue,期待Vue3.0'
  }
];

export class CommentBox extends PureComponent {
  //渲染
  render() {
    return (
      <div className="comment-box">
        <h1> Comments({comments.length}) </h1>
        <CommentList comments={comments} />
        <CommentForm />
        {this.props.time.toLocaleString()}
      </div>
    );
  }
}

export default withTimer(CommentBox);
