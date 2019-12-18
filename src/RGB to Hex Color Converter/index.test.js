import rgbToHex from './index';

test('rgbToHex', () => {
  expect(rgbToHex('rgb(0, 128, 192)')).toBe('#0080c0');
  expect(rgbToHex('rgb(45, 255, 192)')).toBe('#2dffc0');
});
