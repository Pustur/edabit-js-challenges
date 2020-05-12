const getBirthdayCake = (name, age) => {
  const char = age % 2 === 0 ? '#' : '*';
  const middle = `${char} ${age} Happy Birthday ${name}! ${age} ${char}`;
  const edge = char.repeat(middle.length);

  return [edge, middle, edge];
};

export default getBirthdayCake;
