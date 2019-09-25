const sortString = str =>
  str
    .split('')
    .sort()
    .join('');

const isAnagram = (str1, str2) =>
  sortString(str1.toLowerCase()) === sortString(str2.toLowerCase());

const maxHam = (str1, str2) => {
  if (!isAnagram(str1, str2)) return false;

  const diff = str1
    .split('')
    .reduce((total, char, i) => total + Number(str2[i] === char), 0);

  return diff === 0 ? true : str1.length - diff;
};

export default maxHam;
