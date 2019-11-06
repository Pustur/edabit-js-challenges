const isKaprekar = num => {
  const str = String(num ** 2);
  const middleIndex = Math.floor(str.length / 2);
  const left = Number(str.slice(0, middleIndex));
  const right = Number(str.slice(middleIndex));

  return left + right === num;
};

export default isKaprekar;
