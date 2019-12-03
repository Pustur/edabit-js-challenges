import toString from './index';

String.prototype.toString = toString;

test('toString', () => {
  expect('live'.toString()).toBe('evil');
  expect('Level'.toString()).toBe('leveL');
  expect('RaceCar'.toString()).toBe('raCecaR');
  expect('Hello World!'.toString()).toBe('!dlroW olleH');
  expect('penut butter'.toString()).toBe('rettub tunep');
  expect('My hooking function! :3'.toString()).toBe('3: !noitcnuf gnikooh yM');
});
