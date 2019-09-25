import test from 'ava';
import whereIsWaldo from './index';

// prettier-ignore
test("Where's Waldo?", t => {
  t.deepEqual(whereIsWaldo([
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "B", "A"],
  ]), [3, 2]);

  t.deepEqual(whereIsWaldo([
    ["c", "c", "c", "c"],
    ["c", "c", "c", "d"],
  ]), [2, 4]);

  t.deepEqual(whereIsWaldo([
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"],
  ]), [5, 1]);

  t.deepEqual(whereIsWaldo([
    ["X", "X", "Y", "X"],
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
  ]), [1, 3]);
});
