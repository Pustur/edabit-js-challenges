import scoreCalculator from './index';

test('scoreCalculator', () => {
  expect(scoreCalculator(4, 2, 7)).toBe(180);
  expect(scoreCalculator(3, 12, 0)).toBe(135);
  expect(scoreCalculator(5, -5, 2)).toBe('invalid');
});
