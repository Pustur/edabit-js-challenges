import isAstonishing from './index';

test('isAstonishing', () => {
  expect(isAstonishing(15)).toBe('AB-Astonishing');
  expect(isAstonishing(190)).toBe('BA-Astonishing');
  expect(isAstonishing(429)).toBe('AB-Astonishing');
  expect(isAstonishing(4020)).toBe(false);
  expect(isAstonishing(2002077)).toBe('BA-Astonishing');
  expect(isAstonishing(1333353333)).toBe('AB-Astonishing');
  expect(isAstonishing(2665444422)).toBe(false);
  expect(isAstonishing(888887270281)).toBe(false);
  expect(isAstonishing(2313692851932)).toBe('BA-Astonishing');
  expect(isAstonishing(228118821481188)).toBe('AB-Astonishing');
});
