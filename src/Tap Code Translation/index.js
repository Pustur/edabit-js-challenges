const table = ['abcde', 'fghij', 'lmnop', 'qrstu', 'vwxyz'];

const decrypt = str =>
  str.replace(/(\.+) (\.+) ?/g, (_, y, x) => table[y.length - 1][x.length - 1]);

const encrypt = str =>
  str
    .split(' ')
    .map(word =>
      Array.from(word, char => {
        if (char === 'k') return '. ...';

        const y = table.findIndex(row => row.includes(char));
        const x = table[y].indexOf(char);

        return `${'.'.repeat(y + 1)} ${'.'.repeat(x + 1)}`;
      }).join(' '),
    )
    .join(' ');

const tapCode = str => (/^[.\s]+$/.test(str) ? decrypt(str) : encrypt(str));

export default tapCode;
