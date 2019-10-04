import isNew from './index';

test('isNew', () => {
  expect(isNew(0)).toBe(true);
  expect(isNew(90)).toBe(true);
  expect(isNew(102)).toBe(true);
  expect(isNew(123)).toBe(true);
  expect(isNew(321)).toBe(false);
  expect(isNew(601)).toBe(false);
  expect(isNew(4444)).toBe(true);
  expect(isNew(10783)).toBe(false);
  expect(isNew(23401)).toBe(false);
  expect(isNew(30004)).toBe(true);
  expect(isNew(40003)).toBe(false);
  expect(isNew(40567)).toBe(true);
  expect(isNew(125609)).toBe(false);
});
