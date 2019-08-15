export const PLUS_ONE = 'PLUS_ONE'; // 增量
export const MINUS_ONE = 'MINUS_ONE'; //减量

export const plusOne = plus => ({
  type: PLUS_ONE,
  plus
});

export const minusOne = minus => ({
  type: MINUS_ONE,
  minus
});
