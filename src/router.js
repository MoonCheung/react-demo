import React from 'react';
import ChatApp from '@/views/chap01/chatApp';

const routes = [
  {
    path: '/chat',
    exact: true,
    main: ChatApp
  },
  {
    path: '/bubblegum',
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    main: () => <h2>Shoelaces</h2>
  }
];

export default routes;
