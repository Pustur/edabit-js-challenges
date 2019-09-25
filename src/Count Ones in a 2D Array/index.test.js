import test from 'ava';
import countOnes from './index';

// prettier-ignore
test('Count Ones in a 2D Array', t => {
  t.is(countOnes([
    [1, 0, 1],
    [0, 0, 0],
    [0, 0, 1],
  ]), 3);

  t.is(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ]), 7);

  t.is(countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ]), 2);

  t.is(countOnes([
    [5, 2, 3],
    [0, 2, 5],
    [5, 7, 33],
  ]), 0);

  t.is(countOnes([
    [5, 2],
    [0, 2],
    [5, 1],
  ]), 1);

  t.is(countOnes([
    [1, 1],
    [0, 1],
  ]), 3);

  t.is(countOnes([
    [0, 1],
    [0, 0],
  ]), 1);
});
