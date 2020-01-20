import cal from './index';

test('cal', () => {
  expect(cal(15)).toBe(3);
  expect(cal(31)).toBe(7);
  expect(cal(150)).toBe(30);
  expect(cal(151)).toBe(47);
  expect(cal(160)).toBe(48);
  expect(cal(200)).toBe(56);
  expect(cal(300)).toBe(92);
});
