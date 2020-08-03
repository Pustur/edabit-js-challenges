const collatz = n => {
  let num = n;
  const seq = [num];

  while (num !== 1) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    seq.push(num);
  }

  return [seq.length, Math.max(...seq)];
};

export default collatz;
