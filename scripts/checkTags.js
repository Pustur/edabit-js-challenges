/* eslint-disable no-console */

const validTags = [
  'Algebra',
  'Algorithms',
  'Arrays',
  'Bit Operations',
  'Bugs',
  'Classes',
  'Closures',
  'Conditions',
  'Control Flow',
  'Cryptography',
  'Data Structures',
  'Dates',
  'Formatting',
  'Functional Programming',
  'Games',
  'Higher Order Functions',
  'Language Fundamentals',
  'Logic',
  'Loops',
  'Math',
  'Numbers',
  'Objects',
  'Recursion',
  'Regex',
  'Scope',
  'Sorting',
  'Strings',
  'Validation',
];
let str = '';

process.stdin.setEncoding('utf8');

process.stdin.on('data', data => {
  str += data.toString();
});

process.stdin.on('end', () => {
  const tags = Array.from(new Set(str.trim().slice(1, -1).split(/` `/)));
  const invalidTags = tags.filter(tag => !validTags.includes(tag));

  if (invalidTags.length) {
    console.error('[ERR] Invalid tags found:');
    console.error(invalidTags.join('\n'));
    process.exit(1);
  } else {
    console.log('[OK] Tags are valid');
  }
});
