import diffMaxMin from './index';

test('diffMaxMin', () => {
  expect(diffMaxMin([10, 4, 1, 2, 8, 91])).toBe(90);
  expect(diffMaxMin([-70, 43, 34, 54, 22])).toBe(124);
});
