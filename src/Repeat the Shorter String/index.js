const lengthen = (...strings) => {
  const [short, long] = strings.sort((a, b) => a.length - b.length);
  return short.repeat(long.length).slice(0, long.length);
};

export default lengthen;
