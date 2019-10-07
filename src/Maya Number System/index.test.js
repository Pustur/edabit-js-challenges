import mayaNumber from './index';

test('mayaNumber', () => {
  expect(mayaNumber(0)).toEqual(['@']);
  expect(mayaNumber(39)).toEqual(['o', 'oooo———']);
  expect(mayaNumber(666)).toEqual(['o', 'ooo——', 'o—']);
  expect(mayaNumber(815)).toEqual(['oo', '@', '———']);
  expect(mayaNumber(1985)).toEqual(['oooo', 'oooo———', '—']);
  expect(mayaNumber(13579)).toEqual(['o', 'ooo——', 'ooo———', 'oooo———']);
  expect(mayaNumber(16125)).toEqual(['oo', '@', 'o—', '—']);
  expect(mayaNumber(86420)).toEqual(['——', 'o———', 'o', '@']);
});
