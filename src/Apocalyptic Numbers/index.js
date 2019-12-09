const isApocalyptic = num => {
  const matches = String(BigInt(2) ** BigInt(num)).match(/666/g) || [];
  return ['Safe', 'Single', 'Double', 'Triple'][Math.min(3, matches.length)];
};

export default isApocalyptic;
