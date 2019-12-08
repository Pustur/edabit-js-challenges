import hexColorMixer from './index';

test('hexColorMixer', () => {
  expect(hexColorMixer(['#CCCCCC'])).toBe('#CCCCCC');
  expect(hexColorMixer(['#FFFF00', '#FF0000'])).toBe('#FF8000');
  expect(hexColorMixer(['#FFFF00', '#0000FF'])).toBe('#808080');
  expect(hexColorMixer(['#B60E73', '#0EAEB6'])).toBe('#625E95');
  expect(hexColorMixer(['#FF0000', '#00FF00', '#0000FF'])).toBe('#555555');
  expect(hexColorMixer(['#99CC00', '#663399', '#1A8191'])).toBe('#5E8063');
  expect(hexColorMixer(['#918381', '#D53B21', '#A54C83', '#DEFACF'])).toBe(
    '#BA817D',
  );
  expect(hexColorMixer(['#FFFFFF', '#000000', '#000000', '#FFFFFF'])).toBe(
    '#808080',
  );
  expect(
    hexColorMixer([
      '#140A23',
      '#46B31E',
      '#CFDF08',
      '#263534',
      '#EAD1FB',
      '#235E02',
    ]),
  ).toBe('#65803F');
});
