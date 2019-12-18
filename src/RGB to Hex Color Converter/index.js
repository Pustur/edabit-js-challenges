const rgbToHex = str => {
  const hex = str
    .match(/\d+/g)
    .map(channel =>
      Number(channel)
        .toString(16)
        .padStart(2, '0'),
    )
    .join('');

  return `#${hex}`;
};

export default rgbToHex;
