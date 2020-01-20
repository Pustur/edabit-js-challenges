const isPalindrome = str =>
  str ===
  str
    .split('')
    .reverse()
    .join('');

const palindromeType = num => {
  const isDecimalPalindrome = isPalindrome(String(num));
  const isBinaryPalindrome = isPalindrome(num.toString(2));

  return ['Neither!', 'Decimal only.', 'Binary only.', 'Decimal and binary.'][
    isBinaryPalindrome * 2 + isDecimalPalindrome
  ];
};

export default palindromeType;
