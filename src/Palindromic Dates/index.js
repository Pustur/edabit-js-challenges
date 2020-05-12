const isPalindrome = str => str === str.split('').reverse().join('');

const palindromicDate = str => {
  const [d, m, y] = str.split('/');
  return isPalindrome(`${d}${m}${y}`) && isPalindrome(`${m}${d}${y}`);
};

export default palindromicDate;
