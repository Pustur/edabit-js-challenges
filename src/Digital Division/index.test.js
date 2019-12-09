import digitalDivision from './index';

test('digitalDivision', () => {
  expect(digitalDivision(1)).toBe('Perfect');
  expect(digitalDivision(12)).toBe('Perfect');
  expect(digitalDivision(21)).toBe(1);
  expect(digitalDivision(31)).toBe('Indivisible');
  expect(digitalDivision(35)).toBe('Indivisible');
  expect(digitalDivision(40)).toBe(2);
  expect(digitalDivision(100)).toBe(2);
  expect(digitalDivision(111)).toBe('Perfect');
  expect(digitalDivision(128)).toBe(2);
  expect(digitalDivision(666)).toBe(2);
  expect(digitalDivision(735)).toBe('Perfect');
  expect(digitalDivision(1890)).toBe(1);
  expect(digitalDivision(444268)).toBe('Indivisible');
  expect(digitalDivision(123456789)).toBe('Indivisible');
});
