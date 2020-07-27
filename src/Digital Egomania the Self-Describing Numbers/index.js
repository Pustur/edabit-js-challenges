const isSelfDescribing = num => {
  const str = String(num);

  if (str.length % 2) return false;
  return str.match(/\d{2}/g).every(pair => {
    const [quantity, digit] = pair.split('').map(Number);
    return quantity === str.match(new RegExp(digit, 'g')).length;
  });
};

export default isSelfDescribing;
