import volPizza from './index';

test('volPizza', () => {
  expect(volPizza(1, 1)).toBe(3);
  expect(volPizza(7, 2)).toBe(308);
  expect(volPizza(13, 2)).toBe(1062);
  expect(volPizza(20, 1)).toBe(1257);
  expect(volPizza(10, 2.5)).toBe(785);
  expect(volPizza(15, 1.3)).toBe(919);
});
