const isValidAlpha = alpha => parseFloat(alpha) <= 1;

const isValidValue = value => {
  const num = parseInt(value, 10);
  return value.includes('%') ? num <= 100 : num <= 255;
};

const validColor = color => {
  const digit = '(\\d{1,3}%?)';
  const space = '\\s*';
  const num = `${space}${digit}${space}`;
  const alpha = `(?:,${space}(\\d?\\.?\\d+)${space})?`;
  const regex = new RegExp(`(rgba?)\\(${num},${num},${num}${alpha}\\)`);
  const match = color.match(regex);

  if (!match) return false;

  const [, mode, r, g, b, a] = match;
  const validModeLength = mode.length === (a ? 4 : 3);
  const validValues = [r, g, b].every(isValidValue);
  const validAlpha = !a || isValidAlpha(a);

  return validModeLength && validValues && validAlpha;
};

export default validColor;
