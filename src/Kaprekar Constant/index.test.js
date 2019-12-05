import kaprekar from './index';

test('kaprekar', () => {
  expect(kaprekar(1112)).toBe(5);
  expect(kaprekar(1342)).toBe(3);
  expect(kaprekar(2636)).toBe(3);
  expect(kaprekar(3219)).toBe(3);
  expect(kaprekar(3305)).toBe(6);
  expect(kaprekar(4132)).toBe(3);
  expect(kaprekar(4568)).toBe(7);
  expect(kaprekar(5610)).toBe(4);
  expect(kaprekar(6002)).toBe(1);
  expect(kaprekar(6081)).toBe(7);
  expect(kaprekar(6174)).toBe(0);
  expect(kaprekar(6287)).toBe(7);
  expect(kaprekar(7093)).toBe(7);
  expect(kaprekar(7412)).toBe(1);
  expect(kaprekar(7735)).toBe(2);
  expect(kaprekar(8591)).toBe(5);
  expect(kaprekar(8621)).toBe(3);
  expect(kaprekar(8650)).toBe(3);
  expect(kaprekar(9618)).toBe(6);
});
