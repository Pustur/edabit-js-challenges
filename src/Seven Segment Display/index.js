const litSegments = [
  'abcdef',
  'bc',
  'abdeg',
  'abcdg',
  'bcfg',
  'acdfg',
  'acdefg',
  'abc',
  'abcdefg',
  'abcfg',
];

const unique = (a, b) => Array.from(a).filter(char => !b.includes(char));

const sevenSegment = str =>
  Array.from(str.slice(1), (curr, i) =>
    [
      ...unique(litSegments[str[i]], litSegments[curr]),
      ...unique(litSegments[curr], litSegments[str[i]]).join('').toUpperCase(),
    ].sort((a, b) => a.localeCompare(b)),
  );

export default sevenSegment;
