import pokerHandRanking from './index';

test('pokerHandRanking', () => {
  expect(pokerHandRanking(['4h', '9s', '2s', '2d', 'Ad'])).toBe('Pair');
  expect(pokerHandRanking(['8h', '8s', 'As', 'Qh', 'Kh'])).toBe('Pair');
  expect(pokerHandRanking(['Jh', '9h', '7h', '5h', '2h'])).toBe('Flush');
  expect(pokerHandRanking(['Ad', 'Kd', 'Qd', 'Jd', '9d'])).toBe('Flush');
  expect(pokerHandRanking(['8h', '2h', '8s', '3s', '3c'])).toBe('Two Pair');
  expect(pokerHandRanking(['3h', '8h', '2s', '3s', '2d'])).toBe('Two Pair');
  expect(pokerHandRanking(['10h', 'Jh', 'Qs', 'Ks', 'Ac'])).toBe('Straight');
  expect(pokerHandRanking(['3h', '5h', 'Qs', '9h', 'Ad'])).toBe('High Card');
  expect(pokerHandRanking(['Ah', '3s', '4d', 'Js', 'Qd'])).toBe('High Card');
  expect(pokerHandRanking(['10h', 'Jh', 'Qh', 'Ah', 'Kh'])).toBe('Royal Flush');
  expect(pokerHandRanking(['Js', 'Qs', '10s', 'Ks', 'As'])).toBe('Royal Flush');
  expect(pokerHandRanking(['10c', '9c', '9s', '10s', '9h'])).toBe('Full House');
  expect(pokerHandRanking(['4h', 'Ac', '4s', '4d', '4c'])).toBe(
    'Four of a Kind',
  );
  expect(pokerHandRanking(['Ks', 'Js', '10s', 'Qs', '9s'])).toBe(
    'Straight Flush',
  );
  expect(pokerHandRanking(['10s', '9s', '8s', '6s', '7s'])).toBe(
    'Straight Flush',
  );
  expect(pokerHandRanking(['Ac', 'Qc', 'As', 'Ah', '2d'])).toBe(
    'Three of a Kind',
  );
  expect(pokerHandRanking(['3h', '8h', '2s', '3s', '3d'])).toBe(
    'Three of a Kind',
  );
  expect(pokerHandRanking(['10s', '10c', '8d', '10d', '10h'])).toBe(
    'Four of a Kind',
  );
});
