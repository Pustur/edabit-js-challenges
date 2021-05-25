import generatePalindromes from './index';

test('generatePalindromes', () => {
  expect(generatePalindromes(151)).toEqual([
    11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151,
  ]);
  expect(generatePalindromes(600)).toEqual([
    454, 464, 474, 484, 494, 505, 515, 525, 535, 545, 555, 565, 575, 585, 595,
  ]);
  expect(generatePalindromes(3443)).toEqual([
    2002, 2112, 2222, 2332, 2442, 2552, 2662, 2772, 2882, 2992, 3003, 3113,
    3223, 3333, 3443,
  ]);
  expect(generatePalindromes(13000)).toEqual([
    11511, 11611, 11711, 11811, 11911, 12021, 12121, 12221, 12321, 12421, 12521,
    12621, 12721, 12821, 12921,
  ]);
  // Test passes but is kinda slow
  // expect(generatePalindromes(999999)).toEqual([
  //   985589,
  //   986689,
  //   987789,
  //   988889,
  //   989989,
  //   990099,
  //   991199,
  //   992299,
  //   993399,
  //   994499,
  //   995599,
  //   996699,
  //   997799,
  //   998899,
  //   999999,
  // ]);
});
