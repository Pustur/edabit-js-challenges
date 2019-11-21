import incrementString from './index';

test('incrementString', () => {
  expect(incrementString('foo')).toBe('foo1');
  expect(incrementString('foo099')).toBe('foo100');
  expect(incrementString('foo09999')).toBe('foo10000');
  expect(incrementString('foobar01002')).toBe('foobar01003');
  expect(incrementString('foobar00599')).toBe('foobar00600');
});
