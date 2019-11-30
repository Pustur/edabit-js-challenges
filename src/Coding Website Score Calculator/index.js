const scoreCalculator = (easy, medium, hard) => {
  if ([easy, medium, hard].some(val => val < 0)) return 'invalid';
  return easy * 5 + medium * 10 + hard * 20;
};

export default scoreCalculator;
