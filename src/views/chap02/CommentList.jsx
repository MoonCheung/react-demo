import React, { PureComponent } from 'react';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';

export default class CommentList extends PureComponent {
  //用于检查类型
  static propTypes = {
    comments: PropTypes.array.isRequired //必需
  };
  //渲染
  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map((comment, index) => (
          <CommentItem comment={comment} key={index} />
        ))}
      </div>
    );
  }
}
