import spaceWeights from './index';

test('spaceWeights', () => {
  expect(spaceWeights('Earth', 1, 'Mars')).toBe(0.38);
  expect(spaceWeights('Earth', 1, 'Neptune')).toBe(1.14);
  expect(spaceWeights('Earth', 1, 'Jupiter')).toBe(2.53);
  expect(spaceWeights('Uranus', 10, 'Saturn')).toBe(12.01);
  expect(spaceWeights('Venus', 75, 'Jupiter')).toBe(209.61);
  expect(spaceWeights('Mars', 120, 'Mercury')).toBe(119.64);
  expect(spaceWeights('Jupiter', 33, 'Mercury')).toBe(4.93);
  expect(spaceWeights('Saturn', 555, 'Venus')).toBe(471.54);
  expect(spaceWeights('Jupiter', 100, 'Mercury')).toBe(14.93);
  expect(spaceWeights('Neptune', 1421, 'Earth')).toBe(1250.23);
  expect(spaceWeights('Jupiter', 3.141592, 'Earth')).toBe(1.24);
});
