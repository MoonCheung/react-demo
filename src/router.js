import ChatApp from '@/views/chap01/chatApp';
import CommentBox from '@/views/chap02/CommentBox';
import { TabSelectorSample } from '@/views/chap02/TabSelector';
import Clock from '@/views/chap03/Clock';
import SnapshotSample from '@/views/chap03/SnapshotSample';
import LocaleSample from '@/views/chap04/LocaleSample';
import PureRedux from '@/views/chap05/PureRedux';
import Counter from '@/views/chap06/Counter';
import RouterParams from '@/views/chap07/RouterParams';
import NestedRouter from '@/views/chap07/NestedRouter';
import StopWatch from '@/views/chap08/StopWatch';
import RandomJoke from '@/views/chap09/RandomJoke';
import HocComponent from '@/views/chap10/HocComponent';
import RenderProps from '@/views/chap11/RenderProps';
import Provider from '@/views/chap12/index';
import Tabs from '@/views/chap13/Tabs';

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
  },
  {
    path: '/locale',
    main: LocaleSample
  },
  {
    path: '/redux_1',
    main: PureRedux
  },
  {
    path: '/redux_2',
    main: Counter
  },
  {
    path: '/route_1',
    main: RouterParams
  },
  {
    path: '/route_2',
    main: NestedRouter
  },
  {
    path: '/stopwatch',
    main: StopWatch
  },
  {
    path: '/designmodule',
    main: RandomJoke
  },
  {
    path: '/designmodule1',
    main: HocComponent
  },
  {
    path: '/designmodule2',
    main: RenderProps
  },
  {
    path: '/designmodule3',
    main: Provider
  },
  {
    path: '/designmodule4',
    main: Tabs
  }
];

export default routes;
