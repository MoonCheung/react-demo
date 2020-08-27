export const REQUEST_POSTS = 'REQUEST_POSTS'; //请求
export const RECEIVE_POSTS = 'RECEIVE_POSTS'; //接收
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'; //选择新闻内容
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'; //新闻内容失效

//TODO: subreddit作为参数含有负载信息
export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
});

//TODO: subreddit作为参数含有负载信息
export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
});

//TODO: subreddit作为参数含有负载信息
export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
});

//TODO: subreddit作为参数含有负载信息
export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
});

//TODO: subreddit作为参数含有负载信息
const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));
  return (
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      // 得到返回数据信息，然后执行下一步
      .then(res => res.json())
      //将数据派发给receivePosts函数传递参数
      .then(json => dispatch(receivePosts(subreddit, json)))
  );
};

//TODO: subreddit作为参数含有负载信息
const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

//TODO: subreddit作为参数含有负载信息
export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit));
  }
};
