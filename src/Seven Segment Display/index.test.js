import sevenSegment from './index';

test('sevenSegment', () => {
  expect(sevenSegment('1')).toEqual([]);
  expect(sevenSegment('00')).toEqual([[]]);
  expect(sevenSegment('8834')).toEqual([[], ['e', 'f'], ['a', 'd', 'F']]);
  expect(sevenSegment('123')).toEqual([
    ['A', 'c', 'D', 'E', 'G'],
    ['C', 'e'],
  ]);
  expect(sevenSegment('175503')).toEqual([
    ['A'],
    ['b', 'D', 'F', 'G'],
    [],
    ['B', 'E', 'g'],
    ['e', 'f', 'G'],
  ]);
  expect(sevenSegment('9876543210')).toEqual([
    ['D', 'E'],
    ['d', 'e', 'f', 'g'],
    ['b', 'D', 'E', 'F', 'G'],
    ['e'],
    ['a', 'B', 'd'],
    ['A', 'D', 'f'],
    ['c', 'E'],
    ['a', 'C', 'd', 'e', 'g'],
    ['A', 'D', 'E', 'F'],
  ]);
  expect(sevenSegment('0123456789')).toEqual([
    ['a', 'd', 'e', 'f'],
    ['A', 'c', 'D', 'E', 'G'],
    ['C', 'e'],
    ['a', 'd', 'F'],
    ['A', 'b', 'D'],
    ['E'],
    ['B', 'd', 'e', 'f', 'g'],
    ['D', 'E', 'F', 'G'],
    ['d', 'e'],
  ]);
});
