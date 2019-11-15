const isEarlyBird = (range, num) => {
  let sequence = '';
  let numIndex;

  for (let i = 0; i <= range; i += 1) {
    if (i === num) numIndex = sequence.length;
    sequence += i;
  }

  const str = String(num);
  const indices = Array.from(
    sequence.matchAll(new RegExp(`${str[0]}(?=${str.slice(1)})`, 'g')),
    ({ index }) => Array.from({ length: str.length }, (_, i) => index + i),
  );

  return indices.concat(indices[0][0] < numIndex ? 'Early Bird!' : []);
};

export default isEarlyBird;
