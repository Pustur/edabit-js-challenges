const hexColorMixer = colors => {
  const totalRGB = [0, 0, 0];

  colors.forEach(color => {
    const channels = color.slice(1).match(/[\da-f]{2}/gi);

    channels.forEach((channel, i) => {
      totalRGB[i] += parseInt(channel, 16);
    });
  });

  const mixedColor = totalRGB
    .map(channel =>
      Math.round(channel / colors.length)
        .toString(16)
        .padStart(2, '0'),
    )
    .join('');

  return `#${mixedColor}`.toUpperCase();
};

export default hexColorMixer;
