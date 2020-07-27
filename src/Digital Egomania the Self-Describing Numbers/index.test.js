import isSelfDescribing from './index';

test('isSelfDescribing', () => {
  expect(isSelfDescribing(1)).toBe(false);
  expect(isSelfDescribing(11)).toBe(false);
  expect(isSelfDescribing(22)).toBe(true);
  expect(isSelfDescribing(333)).toBe(false);
  expect(isSelfDescribing(2211)).toBe(false);
  expect(isSelfDescribing(224444)).toBe(true);
  expect(isSelfDescribing(10123331)).toBe(true);
  expect(isSelfDescribing(19212332)).toBe(true);
  expect(isSelfDescribing(27273332)).toBe(true);
  expect(isSelfDescribing(4444332231)).toBe(false);
  expect(isSelfDescribing(881722888888)).toBe(true);
});
