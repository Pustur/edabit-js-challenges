const recamanIndex = num => {
  const recaman = [0];

  while (recaman[recaman.length - 1] !== num) {
    const subtraction = recaman[recaman.length - 1] - recaman.length;

    if (subtraction > 0 && !recaman.includes(subtraction)) {
      recaman.push(subtraction);
    } else {
      const addition = recaman[recaman.length - 1] + recaman.length;
      recaman.push(addition);
    }
  }

  return recaman.length - 1;
};

export default recamanIndex;
