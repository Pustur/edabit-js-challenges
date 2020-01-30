const sharp = 'ACDFG';
const flat = 'BDEGA';

const getEquivalent = note => {
  if (note.endsWith('#')) return `${flat[sharp.indexOf(note[0])]}b`;
  return `${sharp[flat.indexOf(note[0])]}#`;
};

export default getEquivalent;
