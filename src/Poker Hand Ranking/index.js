const CARDS_ORDER = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

const frequencyMap = arr =>
  arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map());

const isSameSuit = cards => new Set(cards.map(([, suit]) => suit)).size === 1;

const isSequential = cards => {
  const orderValues = cards
    .map(([value]) => CARDS_ORDER.indexOf(value))
    .sort((a, b) => a - b);

  return orderValues.slice(1).every((num, i) => num - orderValues[i] === 1);
};

const royalFlush = cards =>
  isSameSuit(cards) &&
  isSequential(cards) &&
  cards.some(([value]) => value === 'A') &&
  'Royal Flush';

const straightFlush = cards =>
  isSameSuit(cards) && isSequential(cards) && 'Straight Flush';

const fourOfAKind = freqMap => freqMap[0][1] === 4 && 'Four of a Kind';

const fullHouse = freqMap =>
  freqMap[0][1] === 3 && freqMap[1][1] === 2 && 'Full House';

const flush = cards => isSameSuit(cards) && 'Flush';

const straight = cards => isSequential(cards) && 'Straight';

const threeOfAKind = freqMap => freqMap[0][1] === 3 && 'Three of a Kind';

const twoPair = freqMap =>
  freqMap[0][1] === 2 && freqMap[1][1] === 2 && 'Two Pair';

const pair = freqMap => freqMap[0][1] === 2 && 'Pair';

const pokerHandRanking = cards => {
  const valueAndSuits = cards.map(card => [card.slice(0, -1), card.slice(-1)]);
  const values = valueAndSuits.map(([value]) => value);
  const freqMap = Array.from(frequencyMap(values)).sort(
    ([, a], [, b]) => b - a,
  );

  return (
    royalFlush(valueAndSuits) ||
    straightFlush(valueAndSuits) ||
    fourOfAKind(freqMap) ||
    fullHouse(freqMap) ||
    flush(valueAndSuits) ||
    straight(valueAndSuits) ||
    threeOfAKind(freqMap) ||
    twoPair(freqMap) ||
    pair(freqMap) ||
    'High Card'
  );
};

export default pokerHandRanking;
