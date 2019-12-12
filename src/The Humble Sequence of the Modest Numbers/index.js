const isModest = num => {
  const str = String(num);

  return Array.from({ length: str.length - 1 }, (_, i) => {
    const left = Number(str.slice(0, i + 1));
    const right = Number(str.slice(i + 1));

    return num % right === left;
  }).some(Boolean);
};

export default isModest;
