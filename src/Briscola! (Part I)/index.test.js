import briscolaScore from './index';

test('briscolaScore', () => {
  expect(
    briscolaScore(
      ['Ac', 'As', '3d', '3h', '3s', 'Ah', 'Kd'],
      ['3d', 'Ad', 'Ac', 'As', '3h'],
    ),
  ).toBe('Draw!');
  expect(
    briscolaScore(
      ['Ac', 'As', '3d', '3h', '3s', 'Ah', 'Kd'],
      ['3d', 'Ad', 'Ac', 'As', 'Ah'],
    ),
  ).toBe('You Win!');
  expect(
    briscolaScore(
      ['3c', '3s', 'Qd', 'Jh', '5d', 'Jc', '6d', 'Ad', 'Js', 'Qc'],
      ['Jd', 'Kd', '4c', '6s', 'Ks', '5c', '3d', 'As', 'Jh', '6h'],
    ),
  ).toBe('You Lose!');
  expect(
    briscolaScore(
      ['3c', '3s', 'Qd', 'Jh', '5d', 'Jc', '6d', 'Ad', 'Js', 'Qc'],
      [
        '2s',
        'Kd',
        '3d',
        '6s',
        'Qc',
        '5c',
        '6d',
        '6h',
        '6c',
        '5h',
        'Qd',
        '4s',
        '3c',
        '2h',
        '3s',
      ],
    ),
  ).toBe('You Lose!');
  expect(
    briscolaScore(
      [
        'Js',
        'Qc',
        '2c',
        'Kc',
        'Kh',
        '7c',
        '5h',
        'Jh',
        '2s',
        '6d',
        '4s',
        '4c',
        'Kd',
        '6s',
        'Ks',
        'Qh',
        '7s',
        'Jc',
        '5c',
        '5d',
        '6c',
        '2h',
        'Ad',
        '7d',
        'Ah',
        '5s',
        '3s',
        '6h',
      ],
      ['As', '3c', 'Kd', 'Ac', 'Ah', 'Ad', 'Jh'],
    ),
  ).toBe('Draw!');
  expect(
    briscolaScore(
      [
        '4h',
        '4s',
        '7s',
        '3d',
        '2c',
        'As',
        '3c',
        '4c',
        'Ah',
        '7h',
        'Kc',
        'Jc',
        'Qh',
        'Jd',
        'Ks',
      ],
      [
        '4s',
        'Ah',
        'Qh',
        '7c',
        '6s',
        'Js',
        '6d',
        'Qc',
        '5d',
        'Kd',
        '3d',
        'Ac',
        '4c',
        '5s',
        '3h',
        '6h',
        'As',
        '7d',
        '2s',
        '2c',
        '3c',
        '6c',
        '7h',
        'Kc',
      ],
    ),
  ).toBe('You Win!');
});
