import starRating from './index';

test('starRating', () => {
  expect(starRating([0, 0, 0, 0, 5])).toBe('[5.00] *****');
  expect(starRating([0, 2, 0, 1, 23])).toBe('[4.73] *****');
  expect(starRating([75, 79, 50, 55, 25])).toBe('[2.56] ***');
  expect(starRating([55, 67, 98, 115, 61])).toBe('[3.15] ***');
  expect(starRating([16, 17, 23, 40, 45])).toBe('[3.57] ****');
  expect(starRating([80, 79, 82, 155, 325])).toBe('[3.79] ****');
  expect(starRating([175, 790, 550, 1550, 1245])).toBe('[3.67] ****');
  expect(starRating([6713, 7809, 5350, 5005, 6250])).toBe('[2.88] ***');
});
