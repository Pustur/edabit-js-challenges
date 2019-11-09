import chiSquaredTest from './index';

test('chiSquaredTest', () => {
  expect(chiSquaredTest({ E: [90, 50], T: [80, 40] })).toEqual([
    0.2,
    'Edabitin is ininfluent',
  ]);
  expect(chiSquaredTest({ E: [366, 181], T: [249, 112] })).toEqual([
    0.4,
    'Edabitin is ininfluent',
  ]);
  expect(chiSquaredTest({ E: [100, 50], T: [100, 20] })).toEqual([
    9.6,
    'Edabitin effectiveness = 99%',
  ]);
  expect(chiSquaredTest({ E: [112, 201], T: [77, 90] })).toEqual([
    4.9,
    'Edabitin effectiveness = 95%',
  ]);
  expect(chiSquaredTest({ E: [239, 198], T: [190, 100] })).toEqual([
    8.4,
    'Edabitin effectiveness = 99%',
  ]);
  expect(chiSquaredTest({ E: [207, 282], T: [231, 242] })).toEqual(
    [4.1, 'Edabitin effectiveness = 95%'],
    'Instructions example',
  );
});
