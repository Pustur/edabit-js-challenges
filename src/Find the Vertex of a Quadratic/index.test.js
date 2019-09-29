import findVertex from './index';

test('findVertex', () => {
  expect(findVertex(-1, 0, 25)).toEqual([0, 25]);
  expect(findVertex(1, 10, 25)).toEqual([-5, 0]);
  expect(findVertex(8, 4, 0)).toEqual([-0.25, -0.5]);
  expect(findVertex(-1, 20, 600)).toEqual([10, 700]);
  expect(findVertex(5, 1, 20)).toEqual([-0.1, 19.95]);
  expect(findVertex(4, -200, 1000)).toEqual([25, -1500]);
  expect(findVertex(1, -50, -1000)).toEqual([25, -1625]);
});
