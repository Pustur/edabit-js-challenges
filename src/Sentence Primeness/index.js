const sum = arr => arr.reduce((total, num) => total + num, 0);

const isPrime = num => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const sentencePrimeness = str => {
  const aCharCode = 'a'.charCodeAt();
  const words = str.replace(/[^a-z\d\s]+/gi, '').split(/\s+/);
  const wordValues = words.map(word =>
    sum(
      Array.from(word, char =>
        /\d/.test(char)
          ? Number(char)
          : char.toLowerCase().charCodeAt() - aCharCode + 1,
      ),
    ),
  );
  const total = sum(wordValues);

  if (isPrime(total)) return 'Prime Sentence';

  for (let i = 0; i < wordValues.length; i += 1) {
    if (isPrime(total - wordValues[i])) {
      return `Almost Prime Sentence (${words[i]})`;
    }
  }

  return 'Composite Sentence';
};

export default sentencePrimeness;
