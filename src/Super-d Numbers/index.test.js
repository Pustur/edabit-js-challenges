import isSuperD from './index';

test('isSuperD', () => {
  expect(isSuperD(0)).toBe('Normal Number');
  expect(isSuperD(24)).toBe('Normal Number');
  expect(isSuperD(19)).toBe('Super-2 Number');
  expect(isSuperD(118)).toBe('Normal Number');
  expect(isSuperD(753)).toBe('Super-3 Number');
  expect(isSuperD(1170)).toBe('Normal Number');
  expect(isSuperD(333)).toBe('Super-2 Number');
  expect(isSuperD(107)).toBe('Super-2 Number');
  expect(isSuperD(1168)).toBe('Super-4 Number');
  expect(isSuperD(20379)).toBe('Super-5 Number');
  expect(isSuperD(185423)).toBe('Super-8 Number');
  expect(isSuperD(1184321)).toBe('Super-7 Number');
  expect(isSuperD(1045361)).toBe('Super-6 Number');
  expect(isSuperD(93568867)).toBe('Super-9 Number');
  expect(isSuperD(10098023246)).toBe('Normal Number');
});
