import makeChange from './index';

test('makeChange', () => {
  expect(makeChange(15)).toEqual({ q: 0, d: 1, n: 1, p: 0 });
  expect(makeChange(24)).toEqual({ q: 0, d: 2, n: 0, p: 4 });
  expect(makeChange(25)).toEqual({ q: 1, d: 0, n: 0, p: 0 });
  expect(makeChange(36)).toEqual({ q: 1, d: 1, n: 0, p: 1 });
  expect(makeChange(47)).toEqual({ q: 1, d: 2, n: 0, p: 2 });
  expect(makeChange(87)).toEqual({ q: 3, d: 1, n: 0, p: 2 });
  expect(makeChange(92)).toEqual({ q: 3, d: 1, n: 1, p: 2 });
  expect(makeChange(99)).toEqual({ q: 3, d: 2, n: 0, p: 4 });
});
