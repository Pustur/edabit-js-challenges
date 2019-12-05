import cardHide from './index';

test('cardHide', () => {
  expect(cardHide('35123413355523')).toBe('**********5523');
  expect(cardHide('1234123456785678')).toBe('************5678');
  expect(cardHide('8754456321113213')).toBe('************3213');
});
