const ulam = nth => {
  const sequence = [1, 2];

  for (let i = 3; sequence.length < nth; i += 1) {
    let occurrences = 0;

    for (const num of sequence) {
      const diff = i - num;

      if (diff < num && sequence.includes(diff)) occurrences += 1;
      if (occurrences > 1) break;
    }

    if (occurrences === 1) sequence.push(i);
  }

  return sequence[nth - 1];
};

export default ulam;
