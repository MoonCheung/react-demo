import ChatApp from '@/views/chap01/chatApp';
import CommentBox from '@/views/chap02/CommentBox';

const routes = [
  {
    path: '/chat',
    exact: true,
    main: ChatApp
  },
  {
    path: '/comment',
    main: CommentBox
  }
];

export default routes;
