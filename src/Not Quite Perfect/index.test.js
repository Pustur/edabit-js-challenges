import admirable from './index';

test('admirable', () => {
  expect(admirable(12)).toBe(2);
  expect(admirable(138)).toBe(6);
  expect(admirable(1876)).toBe(28);
  expect(admirable(5456)).toBe(496);
  expect(admirable(6)).toBe('Perfect');
  expect(admirable(496)).toBe('Perfect');
  expect(admirable(18)).toBe('Neither');
  expect(admirable(612)).toBe('Neither');
});
