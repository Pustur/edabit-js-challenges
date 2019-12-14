const sum = arr => arr.reduce((total, num) => total + num, 0);

const bowling = pins => {
  let score = 0;

  for (let frame = 1; frame < 10; frame += 1) {
    const first = pins.shift();

    if (first === 10) score += first + sum(pins.slice(0, 2));
    else {
      const firstTwo = first + pins.shift();
      const isSpare = firstTwo === 10;

      score += firstTwo + (isSpare ? pins[0] : 0);
    }
  }

  return score + sum(pins);
};

export default bowling;
