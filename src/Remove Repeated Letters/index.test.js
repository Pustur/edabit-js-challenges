import unrepeated from './index';

test('unrepeated', () => {
  expect(unrepeated('aaaaa')).toBe('a');
  expect(unrepeated('hello')).toBe('helo');
  expect(unrepeated('WWE!!!')).toBe('WE!');
  expect(unrepeated('call 911')).toBe('cal 91');
  expect(unrepeated('altwaff test')).toBe('altwf es');
});
