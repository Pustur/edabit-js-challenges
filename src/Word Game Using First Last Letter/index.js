const wordGame = (player1, player2) => {
  const sequentialWords = player1.flatMap((_, i) => [player1[i], player2[i]]);
  const duplicateIndex = sequentialWords.findIndex((word, i, arr) =>
    arr.slice(0, i).includes(word),
  );

  if (duplicateIndex > -1) return `Player ${2 - (duplicateIndex % 2)} wins!`;

  const errorIndex = sequentialWords
    .slice(1)
    .findIndex((word, i) => !sequentialWords[i].endsWith(word[0]));

  if (errorIndex === -1) return 'Game continues...';
  return `Player ${(errorIndex % 2) + 1} wins!`;
};

export default wordGame;
