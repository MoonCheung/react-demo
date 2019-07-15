import ChatApp from '@/views/chap01/chatApp';
import CommentBox from '@/views/chap02/CommentBox';
import { TabSelectorSample } from '@/views/chap02/TabSelector';

const routes = [
  {
    path: '/chat',
    exact: true,
    main: ChatApp
  },
  {
    path: '/comment',
    main: CommentBox
  },
  {
    path: '/tabsel',
    main: TabSelectorSample
  }
];

export default routes;
