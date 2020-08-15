const hexToRgb = hex => hex.match(/[\da-f]{2}/gi).map(num => parseInt(num, 16));

const rgbToHex = channels =>
  `#${channels.map(channel => channel.toString(16).padStart(2, '0')).join('')}`;

const rgbHex = (...color) =>
  color.length === 1 ? hexToRgb(color[0]) : rgbToHex(color);

export default rgbHex;
