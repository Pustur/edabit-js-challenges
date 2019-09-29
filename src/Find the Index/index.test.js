import findIndex from './index';

test('Find the Index', t => {
  t.is(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3);
  t.is(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5);
  t.is(
    findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'),
    1,
  );
});
