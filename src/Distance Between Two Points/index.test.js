import getDistance from './index';

test('getDistance', () => {
  expect(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 })).toBe(1.414);
  expect(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 })).toBe(6.325);
  expect(getDistance({ x: 4, y: 3 }, { x: 3, y: -2 })).toBe(5.099);
  expect(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 })).toBe(21.095);
  expect(getDistance({ x: 100, y: 100 }, { x: 100, y: 100 })).toBe(0);
  expect(getDistance({ x: -1, y: -1 }, { x: 10, y: 10 })).toBe(15.556);
  expect(getDistance({ x: 14239, y: -11222 }, { x: -12301, y: 12888 })).toBe(
    35856.153,
  );
});
