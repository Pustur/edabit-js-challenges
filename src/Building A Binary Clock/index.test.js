import binaryClock from './index';

test('binaryClock', () => {
  expect(binaryClock('07:24:16')).toEqual([
    ' 0 0 0',
    ' 10101',
    '011001',
    '010010',
  ]);
  expect(binaryClock('13:48:18')).toEqual([
    ' 0 1 1',
    ' 01000',
    '010000',
    '110010',
  ]);
  expect(binaryClock('18:48:15')).toEqual([
    ' 1 1 0',
    ' 01001',
    '000000',
    '100011',
  ]);
  expect(binaryClock('11:47:55')).toEqual([
    ' 0 0 0',
    ' 01111',
    '000100',
    '110111',
  ]);
  expect(binaryClock('05:46:39')).toEqual([
    ' 0 0 1',
    ' 11100',
    '000110',
    '010011',
  ]);
  expect(binaryClock('20:35:19')).toEqual([
    ' 0 0 1',
    ' 00100',
    '101000',
    '001111',
  ]);
  expect(binaryClock('10:51:40')).toEqual([
    ' 0 0 0',
    ' 01010',
    '000000',
    '101100',
  ]);
  expect(binaryClock('10:16:17')).toEqual([
    ' 0 0 0',
    ' 00101',
    '000101',
    '101011',
  ]);
  expect(binaryClock('08:17:26')).toEqual([
    ' 1 0 0',
    ' 00101',
    '000111',
    '001100',
  ]);
  expect(binaryClock('17:48:59')).toEqual([
    ' 0 1 1',
    ' 11010',
    '010000',
    '110011',
  ]);
  expect(binaryClock('20:04:33')).toEqual([
    ' 0 0 0',
    ' 00100',
    '100011',
    '000011',
  ]);
  expect(binaryClock('01:35:39')).toEqual([
    ' 0 0 1',
    ' 00100',
    '001010',
    '011111',
  ]);
  expect(binaryClock('13:23:39')).toEqual([
    ' 0 0 1',
    ' 00000',
    '011110',
    '110111',
  ]);
  expect(binaryClock('01:56:09')).toEqual([
    ' 0 0 1',
    ' 01100',
    '000100',
    '011001',
  ]);
  expect(binaryClock('10:50:22')).toEqual([
    ' 0 0 0',
    ' 01000',
    '000011',
    '101000',
  ]);
  expect(binaryClock('07:41:09')).toEqual([
    ' 0 0 1',
    ' 11000',
    '010000',
    '010101',
  ]);
  expect(binaryClock('10:20:42')).toEqual([
    ' 0 0 0',
    ' 00010',
    '001001',
    '100000',
  ]);
  expect(binaryClock('02:19:30')).toEqual([
    ' 0 1 0',
    ' 00000',
    '010010',
    '001110',
  ]);
  expect(binaryClock('13:41:41')).toEqual([
    ' 0 0 0',
    ' 01010',
    '010000',
    '110101',
  ]);
  expect(binaryClock('03:17:28')).toEqual([
    ' 0 0 1',
    ' 00100',
    '010110',
    '011100',
  ]);
});
