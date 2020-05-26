import isShapePossible from './index';

test('isShapePossible', () => {
  expect(isShapePossible(1, [21])).toBe(false);
  expect(isShapePossible(2, [21, 78])).toBe(false);
  expect(isShapePossible(3, [180, 0, 0])).toBe(false);
  expect(isShapePossible(3, [20, 20, 140])).toBe(true);
  expect(isShapePossible(4, [90, 90, 90, 90])).toBe(true);
  expect(isShapePossible(4, [90, 90, 90, 89])).toBe(false);
  expect(isShapePossible(4, [180, 180, -10, 10])).toBe(false);
  expect(isShapePossible(5, [500, 10, 10, 10, 10])).toBe(false);
  expect(isShapePossible(5, [100, 100, 100, 200, 40])).toBe(false);
  expect(isShapePossible(5, [108, 108, 108, 108, 108])).toBe(true);
  expect(isShapePossible(7, [830, 20, 20, 10, 10, 5, 5])).toBe(false);
  expect(isShapePossible(8, [135, 135, 135, 135, 135, 135, 135, 135])).toBe(
    true,
  );
  expect(isShapePossible(10, [21, 12, 333, 2, 2532, 52, 2, 2, 1, 8])).toBe(
    false,
  );
});
