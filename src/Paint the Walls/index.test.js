import time from './index';

test('time', () => {
  expect(time({ people: 4, walls: 9, minutes: 63 }, 7, 4)).toBe(16);
  expect(time({ people: 10, walls: 10, minutes: 22 }, 10, 10)).toBe(22);
});
