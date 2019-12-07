import plant from './index';

test('plant', () => {
  expect(plant('#', 1, 5, 30)).toBe('-#####');
  expect(plant('&', 3, 3, 15)).toBe('---------&');
  expect(plant('@', 3, 3, 25)).toBe('---@@@---@@@---@@@');
  expect(plant('€', 4, 10, 38)).toBe('----------------€');
  expect(plant('§', 5, 1, 20)).toBe('-----§-----§-----§-----§-----§');
  expect(plant('🍁', 2, 6, 28)).toBe('--🍁🍁🍁🍁🍁🍁--🍁🍁🍁🍁🍁🍁');
  expect(plant('🍃', 4, 2, 22)).toBe('----🍃🍃----🍃🍃----🍃🍃----🍃🍃');
});
