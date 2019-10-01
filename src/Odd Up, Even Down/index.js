const transform = arr => arr.map(num => (num % 2 === 0 ? num - 1 : num + 1));

export default transform;
