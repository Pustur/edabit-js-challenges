import validatePassword from './index';

test('validatePassword', () => {
  expect(validatePassword('P1zz@')).toBe(false);
  expect(validatePassword('iLoveYou')).toBe(false);
  expect(validatePassword('Repeeea7!')).toBe(false);
  expect(validatePassword('Pè7$areLove')).toBe(false);
  expect(validatePassword('mypassword11')).toBe(false);
  expect(validatePassword('MYPASSWORD11')).toBe(false);
  expect(validatePassword('P1zz@P1zz@P1zz@P1zz@P1zz@')).toBe(false);
  expect(validatePassword('Fhg93@')).toBe(true);
  expect(validatePassword('H4(k+x0')).toBe(true);
  expect(validatePassword("zZ9'?<>,.")).toBe(true);
  expect(validatePassword('aA0!@#$%^&*()+=_-{}[]:;"')).toBe(true);
});
