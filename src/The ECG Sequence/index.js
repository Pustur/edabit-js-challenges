const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const getNextNumber = sequence => {
  const last = sequence[sequence.length - 1];

  for (let i = 3; ; i += 1) {
    if (!sequence.includes(i) && gcd(last, i) > 1) return i;
  }
};

const ecgSequenceIndex = num => {
  const sequence = [1, 2];

  while (!sequence.includes(num)) sequence.push(getNextNumber(sequence));

  return sequence.indexOf(num);
};

export default ecgSequenceIndex;
