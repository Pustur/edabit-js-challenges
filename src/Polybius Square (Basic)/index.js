const table = ['abcde', 'fghik', 'lmnop', 'qrstu', 'vwxyz'];

const decrypt = str =>
  str
    .split(/\s+/)
    .map(chunk => chunk.replace(/(\d)(\d)/g, (_, y, x) => table[y - 1][x - 1]))
    .join(' ');

const encrypt = str =>
  str
    .toLowerCase()
    .replace(/[^a-z\s]+/g, '')
    .split(/\s+/)
    .map(word =>
      Array.from(word, char => {
        if (char === 'j') return '24';

        const y = table.findIndex(row => row.includes(char));
        const x = table[y].indexOf(char);

        return `${y + 1}${x + 1}`;
      }).join(''),
    )
    .join(' ');

const polybius = str => (/^[1-5\s]+$/.test(str) ? decrypt(str) : encrypt(str));

export default polybius;
