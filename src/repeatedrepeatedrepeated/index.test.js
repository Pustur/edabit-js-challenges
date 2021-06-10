import isRepeated from './index';

test('isRepeated', () => {
  expect(isRepeated(','.repeat(24))).toBe(24);
  expect(isRepeated('now'.repeat(8))).toBe(8);
  expect(isRepeated('no'.repeat(12))).toBe(12);
  expect(isRepeated('more'.repeat(6))).toBe(6);
  expect(isRepeated('stop'.repeat(6))).toBe(6);
  expect(isRepeated('puns'.repeat(6))).toBe(6);
  expect(isRepeated('repeat'.repeat(4))).toBe(4);
  expect(isRepeated('please'.repeat(4))).toBe(4);
  expect(isRepeated('repeated'.repeat(3))).toBe(3);
  expect(isRepeated('accomplished'.repeat(2))).toBe(2);
  expect(isRepeated('overintellectualizations')).toBe(false);
  expect(isRepeated('intercomprehensibilities')).toBe(false);
  expect(isRepeated('microspectrophotometries')).toBe(false);
});
