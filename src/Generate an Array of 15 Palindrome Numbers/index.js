const isPalindrome = str => str === str.split('').reverse().join('');

const getPreviousPalindrome = num => {
  for (let i = num - 1; i > 0; i -= 1) {
    if (isPalindrome(String(i))) return i;
  }
  return 0;
};

const generatePalindromes = num => {
  const palindromes = [getPreviousPalindrome(num + 1)];

  while (palindromes.length < 15) {
    palindromes.unshift(getPreviousPalindrome(palindromes[0]));
  }

  return palindromes;
};

export default generatePalindromes;
