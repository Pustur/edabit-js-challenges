import findAllDigits from './index';

test('findAllDigits', () => {
  expect(
    findAllDigits([1291, 6903, 5887, 8914, 3906, 1465, 8452, 4909, 4143, 6921]),
  ).toBe(8914);
  expect(
    findAllDigits([2227, 7262, 9322, 8967, 4807, 8708, 3317, 6543, 9522, 7106]),
  ).toBe(6543);
  expect(
    findAllDigits([2627, 1146, 3964, 6280, 9759, 6188, 8917, 9375, 4012, 4217]),
  ).toBe(9759);
  expect(
    findAllDigits([2758, 3737, 3349, 5118, 7004, 6106, 8868, 6687, 2510, 8911]),
  ).toBe(6106);
  expect(
    findAllDigits([3129, 7689, 7449, 4389, 5855, 9670, 9245, 1291, 7367, 1810]),
  ).toBe(9670);
  expect(
    findAllDigits([4169, 4511, 1498, 6945, 7959, 2666, 7872, 3217, 5408, 8662]),
  ).toBe(5408);
  expect(
    findAllDigits([4467, 2849, 5706, 7330, 9488, 2529, 8837, 2256, 3975, 7311]),
  ).toBe(7311);
  expect(
    findAllDigits([4661, 1207, 8411, 2010, 2092, 2441, 7885, 3810, 7433, 2034]),
  ).toBe(3810);
  expect(
    findAllDigits([4823, 1049, 9555, 9466, 2191, 9316, 1105, 4489, 8318, 7081]),
  ).toBe(7081);
  expect(
    findAllDigits([6572, 3752, 9661, 7017, 8139, 2596, 3054, 2730, 1350, 2483]),
  ).toBe(3054);
  expect(
    findAllDigits([6621, 9480, 8239, 4542, 9772, 5108, 6872, 5057, 9477, 3602]),
  ).toBe(9772);
  expect(
    findAllDigits([7433, 8245, 9603, 1446, 8158, 8756, 5066, 4996, 5233, 2856]),
  ).toBe(1446);
  expect(
    findAllDigits([7985, 7130, 4625, 7392, 4933, 7163, 7130, 2145, 1596, 6188]),
  ).toBe(4625);
  expect(
    findAllDigits([9429, 6519, 3795, 7924, 3042, 3425, 1371, 7194, 7680, 9007]),
  ).toBe(7680);
  expect(
    findAllDigits([9701, 3828, 7183, 2727, 5212, 6721, 5413, 2351, 4237, 8207]),
  ).toBe(5413);
  expect(
    findAllDigits([9827, 4405, 6317, 6086, 8091, 7800, 8365, 2544, 3402, 7248]),
  ).toBe(6317);
  expect(
    findAllDigits([2102, 4519, 4229, 8347, 2019, 7342, 7181, 8977, 1339, 9988]),
  ).toBe('Missing digits!');
  expect(
    findAllDigits([3914, 9923, 8187, 1657, 4271, 9538, 3759, 4543, 3438, 1943]),
  ).toBe('Missing digits!');
  expect(
    findAllDigits([5343, 6743, 2922, 2423, 7050, 5116, 3992, 2707, 2435, 5251]),
  ).toBe('Missing digits!');
  expect(
    findAllDigits([8452, 7326, 6786, 1893, 6546, 8714, 6699, 1361, 4891, 9797]),
  ).toBe('Missing digits!');
});
