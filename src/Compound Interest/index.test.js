import compoundInterest from './index';

test('compoundInterest', () => {
  expect(compoundInterest(100, 1, 0.05, 1)).toBe(105);
  expect(compoundInterest(3500, 15, 0.1, 4)).toBe(15399.26);
  expect(compoundInterest(100000, 20, 0.15, 365)).toBe(2007316.26);
});
