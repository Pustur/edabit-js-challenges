const makeNumber = num => {
  if (num === 1) return [];

  const sequences = [];
  const subSeq = [];
  let sum = 0;

  for (let i = 1; i <= Math.ceil(num / 2); i += 1) {
    subSeq.push(i);
    sum += i;

    if (sum === num) sequences.push(Array.from(subSeq));
    else if (sum > num) {
      while (sum >= num) {
        sum -= subSeq.shift();

        if (sum === num) sequences.push(Array.from(subSeq));
      }
    }
  }

  return sequences;
};

export default makeNumber;
