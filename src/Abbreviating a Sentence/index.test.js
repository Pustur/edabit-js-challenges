import abbreviate from './index';

test('abbreviate', () => {
  expect(abbreviate('laugh out loud')).toBe('LL');
  expect(abbreviate('do it yourself', 2)).toBe('DIY');
  expect(abbreviate('laugh out loud', 3)).toBe('LOL');
  expect(abbreviate('Keep It Simple Stupid')).toBe('KSS');
  expect(abbreviate('Keep It Simple Stupid', 2)).toBe('KISS');
  expect(abbreviate('the acronym of long word lengths', 5)).toBe('AL');
  expect(
    abbreviate('attention AND deficit OR hyperactivity THE disorder'),
  ).toBe('ADHD');
});
