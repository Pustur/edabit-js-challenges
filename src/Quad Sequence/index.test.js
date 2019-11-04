import quadSequence from './index';

test('quadSequence', () => {
  expect(quadSequence([0, 12, 10])).toEqual([-6, -36, -80]);
  expect(quadSequence([48, 65, 84])).toEqual([105, 128, 153]);
  expect(quadSequence([6, 10, 16, 24])).toEqual([34, 46, 60, 76]);
  expect(quadSequence([9, 20, 33, 48])).toEqual([65, 84, 105, 128]);
  expect(quadSequence([0, 1, 6, 15, 28])).toEqual([45, 66, 91, 120, 153]);
  expect(quadSequence([-3, 8, 23, 42, 65])).toEqual([92, 123, 158, 197, 240]);
  expect(quadSequence([3, 12, 27, 48, 75, 108, 147, 192, 243, 300])).toEqual([
    363,
    432,
    507,
    588,
    675,
    768,
    867,
    972,
    1083,
    1200,
  ]);
});
