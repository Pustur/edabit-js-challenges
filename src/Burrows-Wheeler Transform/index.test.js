import bwTransform from './index';

test('bwTransform', () => {
  expect(bwTransform('abaaba$')).toBe('abba$aa');
  expect(bwTransform('banana$')).toBe('annb$aa');
  expect(bwTransform('mississippi$')).toBe('ipssm$pissii');
  expect(bwTransform('acccgtttgtttcaatagatccatcaa$')).toBe(
    'aacc$tacgttctaccatcaatatttgg',
  );
});
