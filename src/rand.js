// @flow

import g from 'gossrandom';

function concat(a: string, b: string): string {
  return a + b;
}

const { interval } = g;
const n = interval(200, 260);

console.log(n);

console.log(concat('Goss ', 5));
