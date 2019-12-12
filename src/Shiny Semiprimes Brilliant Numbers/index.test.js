import isBrilliant from './index';

test('isBrilliant', () => {
  expect(isBrilliant(9)).toBe(true);
  expect(isBrilliant(11)).toBe(false);
  expect(isBrilliant(21)).toBe(true);
  expect(isBrilliant(22)).toBe(false);
  expect(isBrilliant(77)).toBe(false);
  expect(isBrilliant(209)).toBe(true);
  expect(isBrilliant(211)).toBe(false);
  expect(isBrilliant(703)).toBe(true);
  expect(isBrilliant(780)).toBe(false);
  expect(isBrilliant(1000)).toBe(false);
  expect(isBrilliant(1001)).toBe(false);
  expect(isBrilliant(1003)).toBe(true);
  expect(isBrilliant(1008)).toBe(false);
  expect(isBrilliant(16459)).toBe(true);
  expect(isBrilliant(348166)).toBe(false);
  expect(isBrilliant(768017)).toBe(true);
});
