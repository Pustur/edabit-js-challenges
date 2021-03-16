import rotatedWords from './index';

test('rotatedWords', () => {
  expect(rotatedWords('MUBASHIR')).toBe(0);
  expect(rotatedWords('HSSN')).toBe(1);
  expect(rotatedWords('ON')).toBe(1);
  expect(rotatedWords('OS IS UPDATED')).toBe(2);
  expect(rotatedWords('WHO IS WHO')).toBe(2);
  expect(rotatedWords('JS')).toBe(0);
  expect(rotatedWords('I III I III')).toBe(2);
  expect(rotatedWords('SOS IN THE SEA')).toBe(2);
  expect(rotatedWords('WHO IS rotatedWords AND WHO IS NO')).toBe(3);
  expect(rotatedWords('SIN AND COS')).toBe(1);
  expect(rotatedWords('I HAVE A GOOD JOB')).toBe(1);
  expect(rotatedWords('HAVE A GOOD DAY')).toBe(0);
  expect(rotatedWords('')).toBe(0);
});
