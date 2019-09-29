import getPrimieraScore from './index';

test('getPrimieraScore', () => {
  expect(getPrimieraScore(['5d', '7h', 'Qc', 'Ac', '4c', 'Kc', 'As'])).toBe(68);
  expect(
    getPrimieraScore(['3d', '6d', '6h', 'Qh', '7s', 'As', '6c', 'Jc']),
  ).toBe(75);
  expect(
    getPrimieraScore(['3d', '7d', 'Kd', '7h', 'Qh', 'Ah', '7s', '3c', 'Jc']),
  ).toBe(76);
  expect(
    getPrimieraScore([
      '7d',
      'Ad',
      'Kd',
      '2h',
      '6h',
      '5h',
      'Ah',
      '3c',
      'Jc',
      'Ac',
      '7c',
      '3c',
      '4c',
    ]),
  ).toBe(0);
});
