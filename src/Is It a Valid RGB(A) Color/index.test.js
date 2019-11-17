import validColor from './index';

test('validColor', () => {
  expect(validColor('rgb(0,,0)')).toBe(false);
  expect(validColor('rgb(0,0,0)')).toBe(true);
  expect(validColor('rgb(-1,0,0)')).toBe(false);
  expect(validColor('rgba(0,0,0)')).toBe(false);
  expect(validColor('rgb (0,0,0)')).toBe(false);
  expect(validColor('rgba(0,0,0,0)')).toBe(true);
  expect(validColor('rgb(0,0,0,0)')).toBe(false);
  expect(validColor('rgba(0,0,0,.8)')).toBe(true);
  expect(validColor('rgba(0,0,0,-1)')).toBe(false);
  expect(validColor('rgba(0,0,0,1.1)')).toBe(false);
  expect(validColor('rgb(255,255,255)')).toBe(true);
  expect(validColor('rgb(0%,50%,100%)')).toBe(true);
  expect(validColor('rgb(255,256,255)')).toBe(false);
  expect(validColor('rgba(255,255,255,1)')).toBe(true);
  expect(validColor('rgb(100%,100%,101%)')).toBe(false);
  expect(validColor('rgba(0,0,0,0.123456789)')).toBe(true);
  expect(validColor('rgba(	0 , 127	, 255 , 0.1	)')).toBe(true);
});
