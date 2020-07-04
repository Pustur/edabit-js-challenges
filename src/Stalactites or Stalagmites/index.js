const obj = { 0: 'both', 1: 'stalactites', '-1': 'stalagmites' };

const mineralFormation = cave =>
  obj[cave[0].includes(1) - cave[cave.length - 1].includes(1)];

export default mineralFormation;
