const NUMBER_NAMES = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const getDigits = num => Array.from(String(num), Number);

const digitalVowelBan = (num, bannedLetter) =>
  Number(
    getDigits(num)
      .filter(digit => !NUMBER_NAMES[digit].includes(bannedLetter))
      .join(''),
  ) || 'Banned Number';

export default digitalVowelBan;
