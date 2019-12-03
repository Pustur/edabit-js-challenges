import compact from './index';

Array.prototype.compact = compact;

test('compact', () => {
  expect([9, 9, 9, 8, 0, undefined].compact()).toEqual([9, 8, 0]);
  expect(['', 'hello', null, null, 'hello'].compact()).toEqual(['hello']);
  expect([true, true, false, 0, null].compact()).toEqual([true, false, 0]);
  expect([1, 2, 2, 3, null, 0, '', undefined, 'another'].compact()).toEqual([
    1,
    2,
    3,
    0,
    'another',
  ]);
});
