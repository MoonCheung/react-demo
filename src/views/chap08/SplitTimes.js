import React from 'react';
import MajorClock from './MajorClock';

const SplitTimes = ({ value = [] }) =>
  value.map((v, k) => <MajorClock key={k} milliseconds={v} />);

export default SplitTimes;
