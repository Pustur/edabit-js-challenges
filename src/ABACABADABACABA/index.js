const prevChar = char => String.fromCharCode(char.charCodeAt(0) - 1);

const ABA = target => {
  if (target === 'A') return target;
  const prev = ABA(prevChar(target));
  return `${prev}${target}${prev}`;
};

export default ABA;
