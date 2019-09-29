import largestSwap from './index';

test('Largest Swap', () => {
  expect(largestSwap(27)).toBe(false);
  expect(largestSwap(14)).toBe(false);
  expect(largestSwap(43)).toBe(true);
  expect(largestSwap(53)).toBe(true);
  expect(largestSwap(99)).toBe(true);
});
