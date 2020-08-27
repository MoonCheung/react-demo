import { combineReducers } from 'redux';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT
} from '../actions/index';

const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
};

const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      };
    default:
      return state;
  }
};

const posts = (
  state = {
    isFetching: false, //是否正在请求数据
    didInvalidate: false, //是否更新作废旧数据
    items: [] //存放相关条目所有信息
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt //最近一次更新时间
      };
    default:
      return state;
  }
};

// reducer 函数拆分为postsBySubreddit和selectedSubreddit，并使用combineReducers进行合并
// TODO: 常量rootReducer 不能错的，不是随便取常量名
const rootReducer = combineReducers({
  selectedSubreddit,
  postsBySubreddit
});

export default rootReducer;
