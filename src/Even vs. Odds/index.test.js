import availableSpots from './index';

test('availableSpots', () => {
  expect(availableSpots([4, 4], 8)).toBe(1);
  expect(availableSpots([0, 4, 6, 8], 9)).toBe(0);
  expect(availableSpots([0, 4, 6, 8], 6)).toBe(3);
  expect(availableSpots([1, 2, 3, 4], 6)).toBe(3);
  expect(availableSpots([1, 2, 3, 4], 5)).toBe(3);
  expect(availableSpots([1, 1, 1, 4], 7)).toBe(3);
  expect(availableSpots([1, 1, 4, 4], 7)).toBe(2);
  expect(availableSpots([1, 4, 4, 4], 7)).toBe(1);
  expect(availableSpots([4, 4, 4, 4], 7)).toBe(0);
  expect(availableSpots([5, 5, 5, 8, 8, 5, 5, 5, 5], 32)).toBe(3);
});
