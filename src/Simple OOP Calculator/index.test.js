import Calculator from './index';

test('Calculator', () => {
  const calculator = new Calculator();

  expect(calculator.add(5, 5)).toBe(10);
  expect(calculator.add(20, 5)).toBe(25);
  expect(calculator.subtract(30, 5)).toBe(25);
  expect(calculator.subtract(100, 5)).toBe(95);
  expect(calculator.multiply(5, 5)).toBe(25);
  expect(calculator.multiply(100, 5)).toBe(500);
  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.divide(100, 5)).toBe(20);
});
