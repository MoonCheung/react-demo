import ChatApp from '@/views/chap01/chatApp';
import CommentBox from '@/views/chap02/CommentBox';
import { TabSelectorSample } from '@/views/chap02/TabSelector';
import Clock from '@/views/chap03/Clock';
import SnapshotSample from '@/views/chap03/SnapshotSample';
import LocaleSample from '@/views/chap04/LocaleSample';
import ReduxDemo from '@/views/chap05/Index';
import CounterDemo from '@/views/chap06/counter/index';
import RouterParams from '@/views/chap07/RouterParams';
import NestedRouter from '@/views/chap07/NestedRouter';
import StopWatch from '@/views/chap08/StopWatch';
import RandomJoke from '@/views/chap09/RandomJoke';
import HocComponent from '@/views/chap10/HocComponent';
import RenderProps from '@/views/chap11/RenderProps';
import Provider from '@/views/chap12/index';
import Tabs from '@/views/chap13/Tabs';
import MobxDemo from '@/views/chap14/Index';
import SuspenseDemo from '@/views/chap16/SuspenseDemo';
import HoockDemo from '@/views/chap17/Index';
import RefsDemo from '@/views/chap18/Index';

const routes = [
  {
    path: '/chat',
    exact: true,
    main: ChatApp
  },
  {
    path: '/comment',
    exact: true,
    main: CommentBox
  },
  {
    path: '/tabsel',
    exact: true,
    main: TabSelectorSample
  },
  {
    path: '/clock',
    exact: true,
    main: Clock
  },
  {
    path: '/snapshot',
    exact: true,
    main: SnapshotSample
  },
  {
    path: '/locale',
    exact: true,
    main: LocaleSample
  },
  {
    path: '/redux_1',
    exact: true,
    main: ReduxDemo
  },
  {
    path: '/redux_2',
    exact: true,
    main: CounterDemo
  },
  {
    path: '/route_1',
    exact: true,
    main: RouterParams
  },
  {
    path: '/route_2',
    exact: true,
    main: NestedRouter
  },
  {
    path: '/stopwatch',
    exact: true,
    main: StopWatch
  },
  {
    path: '/designmodule',
    exact: true,
    main: RandomJoke
  },
  {
    path: '/designmodule1',
    exact: true,
    main: HocComponent
  },
  {
    path: '/designmodule2',
    exact: true,
    main: RenderProps
  },
  {
    path: '/designmodule3',
    exact: true,
    main: Provider
  },
  {
    path: '/designmodule4',
    exact: true,
    main: Tabs
  },
  {
    path: '/mobx',
    exact: true,
    main: MobxDemo
  },
  {
    path: '/suspense',
    exact: true,
    main: SuspenseDemo
  },
  {
    path: '/hoock',
    exact: true,
    main: HoockDemo
  },
  {
    path: '/refs',
    exact: true,
    main: RefsDemo
  }
];

export default routes;
