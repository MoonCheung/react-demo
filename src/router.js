import ChatApp from '@/views/chap01/chatApp';
import CommentBox from '@/views/chap02/CommentBox';
import { TabSelectorSample } from '@/views/chap02/TabSelector';
import Clock from '@/views/chap03/Clock';
import SnapshotSample from '@/views/chap03/SnapshotSample';
import LocaleSample from '@/views/chap04/LocaleSample';
import ReduxDemo from '@/views/chap05/Index';
import ReduxSample from '@/views/chap06/index';
import RouterParams from '@/views/chap07/RouterParams';
import NestedRouter from '@/views/chap07/NestedRouter';
import StopWatch from '@/views/chap08/StopWatch';
import RandomJoke from '@/views/chap09/RandomJoke';
import HocComponent from '@/views/chap10/HocComponent';
import RenderProps from '@/views/chap11/RenderProps';
import Provider from '@/views/chap12/index';
import Tabs from '@/views/chap13/Tabs';
import MobxDemo from '@/views/chap14/Index';
import SuspenseDemo from '@/views/chap15/SuspenseDemo';
import HoockDemo from '@/views/chap16/Index';
import RefsDemo from '@/views/chap17/Index';

const routes = [
  {
    path: '/chat',
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
    path: '/redux',
    main: ReduxDemo
  },
  {
    path: '/redux_1',
    main: ReduxSample
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
  },
  {
    path: '/mobx',
    main: MobxDemo
  },
  {
    path: '/suspense',
    main: SuspenseDemo
  },
  {
    path: '/hoock',
    main: HoockDemo
  },
  {
    path: '/refs',
    main: RefsDemo
  }
];

export default routes;
