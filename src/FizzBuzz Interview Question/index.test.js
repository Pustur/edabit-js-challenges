import fizzBuzz from './index';

test('fizzBuzz', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(10)).toBe('Buzz');
  expect(fizzBuzz(15)).toBe('FizzBuzz');
  expect(fizzBuzz(98)).toBe(98);
});
