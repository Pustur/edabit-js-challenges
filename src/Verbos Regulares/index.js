const pronouns = ['Yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];

const conjugations = {
  ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
  er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
  ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
};

const espVerb = verb => {
  const base = verb.slice(0, -2);
  const ending = verb.slice(-2);

  return `${conjugations[ending]
    .map((conjugation, i) => `${pronouns[i]} ${base}${conjugation}`)
    .join(', ')}.`;
};

export default espVerb;
