import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
import { Button } from 'antd';
import {
  selectSubreddit,
  invalidateSubreddit,
  fetchPostsIfNeeded
} from '../actions/index';

class Async extends Component {
  // 用来检查类型
  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };
  // 组件挂载后调用
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }
  // 该组件更新后被立即调用
  componentDidUpdate(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }
  // 改变方法
  handleChange = nextSubreddit => {
    const { dispatch } = this.props;
    dispatch(selectSubreddit(nextSubreddit));
  };
  // 点击刷新方法
  handleRefreshClick = e => {
    e.preventDefault();
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  };
  // 该方法用来渲染
  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
    const isEmpty = posts.length === 0; //如得到空值，则赋值为0
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend', 'vuejs', 'Nuxt', 'angularjs']}
        />
        <p>
          {lastUpdated && (
            <span>
              上次更新时间 {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!isFetching && (
            <Button
              type="primary"
              size="small"
              onClick={this.handleRefreshClick}>
              刷新
            </Button>
          )}
        </p>
        {isEmpty ? (
          isFetching ? (
            <h2>加载中...</h2>
          ) : (
            <h2>空数据</h2>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
      </div>
    );
  }
}

/**
 *
 * 该方法函数根据各个组件所需不同数据进行整合
 * @param {*} state
 * @returns selectedSubreddit，isFetching, lastUpdated, posts
 * 以上四项数据作为props连通的，然后这样该这样组件可在render方法中调用其子组件并完成数据传递。
 */
const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  };
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(Async);
