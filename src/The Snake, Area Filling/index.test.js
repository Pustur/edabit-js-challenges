import snakefill from './index';

test('snakefill', () => {
  expect(snakefill(1)).toBe(0);
  expect(snakefill(2)).toBe(2);
  expect(snakefill(3)).toBe(3);
  expect(snakefill(6)).toBe(5);
  expect(snakefill(8)).toBe(6);
  expect(snakefill(18)).toBe(8);
  expect(snakefill(555)).toBe(18);
  expect(snakefill(900)).toBe(19);
  expect(snakefill(25477)).toBe(29);
});
