const stepsToConvert = str =>
  Math.min(
    str.replace(/[a-z]+/g, '').length,
    str.replace(/[A-Z]+/g, '').length,
  );

export default stepsToConvert;
