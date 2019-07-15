import ChatApp from '@/views/chap01/chatApp';
import CommentBox from '@/views/chap02/CommentBox';
import { TabSelectorSample } from '@/views/chap02/TabSelector';
import Clock from '@/views/chap03/Clock';
import SnapshotSample from '@/views/chap03/SnapshotSample';

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
  },
  {
    path: '/clock',
    main: Clock
  },
  {
    path: '/snapshot',
    main: SnapshotSample
  }
];

export default routes;
