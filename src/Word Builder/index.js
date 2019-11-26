const wordBuilder = (letters, indices) =>
  letters.map((_, i) => letters[indices.indexOf(i)]).join('');

export default wordBuilder;
