const constructDeconstruct = str => {
  const length = str.length * 2 - 1;
  return Array.from({ length }, (_, i) =>
    str.slice(0, Math.min(i + 1, length - i)),
  );
};

export default constructDeconstruct;
