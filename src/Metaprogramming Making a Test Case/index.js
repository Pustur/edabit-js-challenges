const createTest = (a, b) => {
  const isArray = Array.isArray(a);
  const result = isArray ? a.concat(b) : a + b;
  const assertType = isArray ? 'Similar' : 'Equals';
  const A = JSON.stringify(a);
  const B = JSON.stringify(b);
  const R = JSON.stringify(result).replace(/,/g, ', ');

  return `Test.assert${assertType}(createTest(${A}, ${B}), ${R})`;
};

export default createTest;
