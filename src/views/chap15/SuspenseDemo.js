import React from 'react';
import Suspense from './Suspense';
import { createFetcher } from './future';

const getName = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('MoonCheung');
    }, 1000);
  });

const Fetcher = createFetcher(getName);

const Greeting = () => <div>hello {Fetcher}</div>;

const SuspenseDemo = () => (
  <Suspense>
    <Greeting />
  </Suspense>
);

export default SuspenseDemo;
