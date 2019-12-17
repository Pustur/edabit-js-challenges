import cars from './index';

test('cars', () => {
  expect(cars(72, 7, 21)).toBe(7);
  expect(cars(9, 44, 34)).toBe(2);
  expect(cars(50, 38, 7)).toBe(3);
  expect(cars(68, 9, 44)).toBe(9);
  expect(cars(3, 29, 54)).toBe(0);
  expect(cars(97, 6, 10)).toBe(5);
  expect(cars(37, 15, 20)).toBe(9);
  expect(cars(28, 34, 80)).toBe(7);
  expect(cars(88, 50, 83)).toBe(22);
  expect(cars(66, 18, 21)).toBe(10);
  expect(cars(593, 78, 389)).toBe(78);
  expect(cars(921, 310, 350)).toBe(175);
  expect(cars(736, 430, 851)).toBe(184);
  expect(cars(405, 379, 740)).toBe(101);
  expect(cars(875, 370, 675)).toBe(218);
  expect(cars(863, 274, 203)).toBe(101);
  expect(cars(959, 331, 537)).toBe(239);
  expect(cars(416, 340, 551)).toBe(104);
  expect(cars(692, 348, 543)).toBe(173);
  expect(cars(527, 412, 951)).toBe(131);
});
