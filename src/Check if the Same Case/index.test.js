import sameCase from './index';

test('Check if the Same Case', () => {
  expect(sameCase('HELLO')).toBe(true);
  expect(sameCase('pickle')).toBe(true);
  expect(sameCase('MUSTARD')).toBe(true);
  expect(sameCase('marmalade')).toBe(true);
  expect(sameCase('MARMALADE')).toBe(true);

  expect(sameCase('HEllo')).toBe(false);
  expect(sameCase('ketchUP')).toBe(false);
  expect(sameCase('mArmALadE')).toBe(false);
});
