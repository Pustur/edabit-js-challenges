const sharedOrUnique = (str1, str2, mode) =>
  Array.from(new Set(str1))
    .filter(letter =>
      mode === 'shared' ? str2.includes(letter) : !str2.includes(letter),
    )
    .sort()
    .join('');

const letters = (str1, str2) => [
  sharedOrUnique(str1, str2, 'shared'),
  sharedOrUnique(str1, str2, 'unique'),
  sharedOrUnique(str2, str1, 'unique'),
];

export default letters;
