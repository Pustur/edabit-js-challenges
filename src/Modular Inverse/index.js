const modInv = (a, b) => {
  for (let i = b; i % a; i += b) {
    if ((i + 1) % a === 0) return (i + 1) / a;
  }
  return false;
};

export default modInv;
