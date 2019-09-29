import sumOfHoles from './index';

test('Hole Number Sequence', () => {
  expect(sumOfHoles(1)).toBe(0);
  expect(sumOfHoles(4)).toBe(1);
  expect(sumOfHoles(6)).toBe(2);
  expect(sumOfHoles(8)).toBe(4);
  expect(sumOfHoles(9)).toBe(5);
  expect(sumOfHoles(10)).toBe(6);
  expect(sumOfHoles(88)).toBe(90);
  expect(sumOfHoles(10000)).toBe(22893);
  expect(sumOfHoles(12345)).toBe(27991);
});
