import getPrimieraScore from './index';

test('The Primiera', t => {
  t.is(getPrimieraScore(['5d', '7h', 'Qc', 'Ac', '4c', 'Kc', 'As']), 68);
  t.is(getPrimieraScore(['3d', '6d', '6h', 'Qh', '7s', 'As', '6c', 'Jc']), 75);
  t.is(
    getPrimieraScore(['3d', '7d', 'Kd', '7h', 'Qh', 'Ah', '7s', '3c', 'Jc']),
    76,
  );
  t.is(
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
    0,
    'At least one card per suit must be in the deck',
  );
});
