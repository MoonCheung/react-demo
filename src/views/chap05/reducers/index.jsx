import { PLUS_ONE, MINUS_ONE } from '../actions/index';

// 存储初始化状态
const initialState = {
  count: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return { count: state.count + 1 };
    case MINUS_ONE:
      return { count: state.count - 1 };
    case 'CUSTOM_COUNT':
      return {
        count: state.count + action.payload.count
      };
    default:
      break;
  }
  return state;
};

export default counter;
