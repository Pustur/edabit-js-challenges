import ulam from './index';

test('Ulam Sequence', () => {
  expect(ulam(4)).toBe(4);
  expect(ulam(9)).toBe(16);
  expect(ulam(38)).toBe(180);
  expect(ulam(99)).toBe(688);
  expect(ulam(206)).toBe(1856);
  expect(ulam(495)).toBe(5597);
  expect(ulam(577)).toBe(6782);
});
