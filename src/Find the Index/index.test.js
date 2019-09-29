import findIndex from './index';

test('findIndex', () => {
  expect(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape')).toBe(3);
  expect(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f')).toBe(5);
  expect(
    findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'),
  ).toBe(1);
});
