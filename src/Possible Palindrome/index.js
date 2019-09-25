const possiblePalindrome = str => {
  const regex = /(.)(.*?)\1/;
  return !regex.test(str)
    ? str.length < 2
    : possiblePalindrome(str.replace(regex, '$2'));
};

export default possiblePalindrome;
