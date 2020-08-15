const lookAndSay = num => {
  const str = String(num);

  if (str.length % 2) return 'invalid';
  return Number(
    str.replace(/\d{2}/g, ([first, second]) => second.repeat(first)),
  );
};

export default lookAndSay;
