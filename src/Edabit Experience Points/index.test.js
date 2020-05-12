import getXP from './index';

test('getXP', () => {
  expect(
    getXP({
      'Very Easy': 89,
      'Easy': 77,
      'Medium': 30,
      'Hard': 4,
      'Very Hard': 1,
    }),
  ).toBe('2055XP');
  expect(
    getXP({
      'Very Easy': 254,
      'Easy': 32,
      'Medium': 65,
      'Hard': 51,
      'Very Hard': 34,
    }),
  ).toBe('7650XP');
  expect(
    getXP({
      'Very Easy': 11,
      'Easy': 0,
      'Medium': 2,
      'Hard': 0,
      'Very Hard': 27,
    }),
  ).toBe('2255XP');
});
