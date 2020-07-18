import junctionOrSelf from './index';

test('junctionOrSelf', () => {
  expect(junctionOrSelf(1)).toBe('Self');
  expect(junctionOrSelf(2)).toEqual([1]);
  expect(junctionOrSelf(7)).toBe('Self');
  expect(junctionOrSelf(11)).toEqual([10]);
  expect(junctionOrSelf(20)).toBe('Self');
  expect(junctionOrSelf(25)).toEqual([17]);
  expect(junctionOrSelf(117)).toEqual([108, 99]);
  expect(junctionOrSelf(165)).toBe('Self');
  expect(junctionOrSelf(188)).toEqual([175]);
  expect(junctionOrSelf(309)).toEqual([303, 294]);
  expect(junctionOrSelf(406)).toEqual([401, 392]);
  expect(junctionOrSelf(818)).toEqual([805, 796]);
});
