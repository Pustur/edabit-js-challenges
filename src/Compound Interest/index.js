const compoundInterest = (p, t, r, n) =>
  Number((p * (1 + r / n) ** (n * t)).toFixed(2));

export default compoundInterest;
