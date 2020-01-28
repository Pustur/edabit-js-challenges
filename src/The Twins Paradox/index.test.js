import twins from './index';

test('twins', () => {
  expect(twins(1, 5, 0.1)).toBe("Jack's age is 100.5, Jill's age is 101.0");
  expect(twins(20, 10, 0.4)).toBe("Jack's age is 65.8, Jill's age is 70.0");
  expect(twins(20, 10, 0.8)).toBe("Jack's age is 35.0, Jill's age is 45.0");
  expect(twins(25, 30, 0.99999)).toBe("Jack's age is 25.3, Jill's age is 85.0");
  expect(twins(10, 16.73, 0.999)).toBe(
    "Jack's age is 11.5, Jill's age is 43.5",
  );
});
