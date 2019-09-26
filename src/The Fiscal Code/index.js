const monthLetters = 'ABCDEHLMPRST';

const getConsonants = str => str.replace(/[aeiou]/gi, '');

const getVowels = str => str.replace(/[^aeiou]/gi, '');

const getCode = (...strings) => `${strings.join('')}XXX`.slice(0, 3);

const getSurnameCode = surname =>
  getCode(getConsonants(surname), getVowels(surname));

const getNameCode = name => {
  const consonants = getConsonants(name);
  return consonants.length > 3
    ? consonants[0] + consonants.slice(2, 4)
    : getCode(consonants, getVowels(name));
};

const getDateCode = (gender, date) => {
  const [day, month, year] = date.split('/');
  const y = year.slice(-2);
  const m = monthLetters[month - 1];
  const d = gender === 'M' ? day.padStart(2, '0') : Number(day) + 40;

  return y + m + d;
};

const fiscalCode = ({ name, surname, gender, dob }) =>
  (
    getSurnameCode(surname) +
    getNameCode(name) +
    getDateCode(gender, dob)
  ).toUpperCase();

export default fiscalCode;
