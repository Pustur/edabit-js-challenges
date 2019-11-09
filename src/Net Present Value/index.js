const netPresentValue = (presentValue, rate, years) => {
  if ([presentValue, rate, years].some(num => num < 0)) return false;
  return `$${Math.round(((1 - (1 + rate) ** -years) / rate) * presentValue)}`;
};

export default netPresentValue;
