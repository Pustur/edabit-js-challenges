const isAutobiographical = num => {
  const str = String(num);
  return Array.from(str).every((digit, i) => {
    const count = (str.match(new RegExp(i, 'g')) || []).length;
    return count === Number(digit);
  });
};

export default isAutobiographical;
