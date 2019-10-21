import toArray from './index';

test('toArray', () => {
  expect(toArray({})).toEqual([]);
  expect(toArray({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]]);
  expect(toArray({ shrimp: 15, tots: 12 })).toEqual([
    ['shrimp', 15],
    ['tots', 12],
  ]);
  expect(toArray({ foo: 33, bar: 45, baz: 67 })).toEqual([
    ['foo', 33],
    ['bar', 45],
    ['baz', 67],
  ]);
});
