import findVertex from './index';

test('Find the Vertex of a Quadratic', t => {
  t.deepEqual(findVertex(-1, 0, 25), [0, 25]);
  t.deepEqual(findVertex(1, 10, 25), [-5, 0]);
  t.deepEqual(findVertex(8, 4, 0), [-0.25, -0.5]);
  t.deepEqual(findVertex(4, -200, 1000), [25, -1500]);
  t.deepEqual(findVertex(1, -50, -1000), [25, -1625]);
  t.deepEqual(findVertex(-1, 20, 600), [10, 700]);
  t.deepEqual(findVertex(5, 1, 20), [-0.1, 19.95]);
});
