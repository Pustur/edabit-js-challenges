const table = [
  { pronoun: 'Io', suffix: 'o' },
  { pronoun: 'Tu', suffix: 'i' },
  { pronoun: 'Egli', suffix: 'a' },
  { pronoun: 'Noi', suffix: 'iamo' },
  { pronoun: 'Voi', suffix: 'ate' },
  { pronoun: 'Essi', suffix: 'ano' },
];

const conjugate = (verb, person) => {
  const { pronoun, suffix } = table[person - 1];
  let root = verb.slice(0, -3);

  if (/[cg]$/.test(root)) root += 'h';
  if (root.endsWith('i') && [2, 4].includes(person)) root = root.slice(0, -1);

  return `${pronoun} ${root}${suffix}`;
};

export default conjugate;
