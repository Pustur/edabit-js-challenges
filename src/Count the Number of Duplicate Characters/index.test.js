import duplicates from './index';

test('duplicates', () => {
  expect(duplicates('gamer')).toBe(0);
  expect(duplicates('foobar')).toBe(1);
  expect(duplicates('birthday')).toBe(0);
  expect(duplicates('gamer gang')).toBe(3);
  expect(duplicates('helicopter')).toBe(1);
  expect(duplicates('donald trump')).toBe(1);
  expect(duplicates('Hello World!')).toBe(3);
  expect(duplicates('The Quick Brown Fox Jumps Over the Lazy Dog')).toBe(14);
  expect(
    duplicates(
      "Evil minds that plot destruction,Sorcerer of death's construction",
    ),
  ).toBe(43);
  expect(
    duplicates(
      "Gen'rals gathered in their masses,Just like witches at black masses",
    ),
  ).toBe(45);
  expect(
    duplicates(
      'Row, row, row your boat Gently down the stream Merrily merrily, merrily, merrily Life is but a dream.',
    ),
  ).toBe(77);
});
