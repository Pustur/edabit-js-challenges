const getPermutations = arr => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const rest = getPermutations(arr.slice(0, i).concat(arr.slice(i + 1)));

    if (!rest.length) result.push([arr[i]]);
    else {
      rest.forEach(item => {
        result.push([arr[i]].concat(item));
      });
    }
  }

  return result;
};

const isVampire = num => {
  const numStr = String(num);
  const isVampireNumber = getPermutations(numStr).some(permutation => {
    const str = permutation.join('');
    const half = str.length / 2;
    const first = str.slice(0, half);
    const second = str.slice(half);

    return first * second === num;
  });

  if (!isVampireNumber) return 'Normal Number';
  return numStr.length % 2 ? 'Pseudovampire' : 'True Vampire';
};

export default isVampire;
