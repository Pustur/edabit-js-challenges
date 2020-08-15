import rgbHex from './index';

test('rgbHex', () => {
  expect(rgbHex(0, 0, 0)).toBe('#000000');
  expect(rgbHex('#000000')).toEqual([0, 0, 0]);
  expect(rgbHex(148, 0, 255)).toBe('#9400ff');
  expect(rgbHex('#9400ff')).toEqual([148, 0, 255]);
  expect(rgbHex(15, 59, 122)).toBe('#0f3b7a');
  expect(rgbHex('#0f3b7a')).toEqual([15, 59, 122]);
  expect(rgbHex(180, 15, 59)).toBe('#b40f3b');
  expect(rgbHex('#b40f3b')).toEqual([180, 15, 59]);
  expect(rgbHex(200, 14, 0)).toBe('#c80e00');
  expect(rgbHex('#c80e00')).toEqual([200, 14, 0]);
  expect(rgbHex(255, 255, 0)).toBe('#ffff00');
  expect(rgbHex('#ffff00')).toEqual([255, 255, 0]);
  expect(rgbHex(100, 50, 50)).toBe('#643232');
  expect(rgbHex('#643232')).toEqual([100, 50, 50]);
  expect(rgbHex(160, 45, 99)).toBe('#a02d63');
  expect(rgbHex('#a02d63')).toEqual([160, 45, 99]);
  expect(rgbHex(0, 203, 70)).toBe('#00cb46');
  expect(rgbHex('#00cb46')).toEqual([0, 203, 70]);
  expect(rgbHex(200, 50, 0)).toBe('#c83200');
  expect(rgbHex('#c83200')).toEqual([200, 50, 0]);
  expect(rgbHex(80, 13, 1)).toBe('#500d01');
  expect(rgbHex('#500d01')).toEqual([80, 13, 1]);
});
