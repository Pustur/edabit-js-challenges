import calculateAmountsOwing from './index';

test('calculateAmountsOwing', () => {
  const data1 = {
    deviceLevels: [
      [0, 1.0],
      [1, 1.5],
    ],
    devices: [
      [0, 0],
      [1, 1],
    ],
    customers: [
      [0, 'John', 10, 5],
      [1, 'Sara', 5, 7],
    ],
    rentals: [
      [0, 1, [0], 10],
      [1, 0, [1], 20],
      [2, 1, [1, 0], 20],
    ],
  };
  const data2 = {
    deviceLevels: [
      [0, 1.0],
      [1, 1.5],
      [2, 2.0],
      [3, 5.0],
    ],
    devices: [
      [0, 0],
      [1, 0],
      [2, 2],
      [3, 1],
      [4, 1],
    ],
    customers: [
      [0, 'John', 15, 5],
      [1, 'Lea', 25, 20],
      [2, 'Sara', 5, 10],
      [3, 'Bob', 0, 50],
      [4, 'Eric', 10, 10],
    ],
    rentals: [
      [0, 1, [1, 0], 10],
      [1, 2, [2], 24],
      [2, 3, [3], 5],
      [3, 4, [2, 3], 48],
      [4, 1, [1, 0], 10],
      [5, 2, [1], 24],
      [6, 3, [3, 2], 5],
      [7, 4, [2, 3, 0], 48],
      [8, 0, [4], 10],
      [9, 0, [4], 15],
    ],
  };
  const data3 = {
    deviceLevels: [
      [0, 1.0],
      [1, 3.5],
      [2, 2.0],
      [3, 5.0],
    ],
    devices: [
      [0, 0],
      [1, 0],
      [2, 2],
      [3, 1],
      [4, 1],
    ],
    customers: [
      [0, 'John', 15, 5],
      [1, 'Lea', 50, 20],
      [2, 'Sara', 5, 100],
      [3, 'Bob', 0, 50],
      [4, 'Eric', 10, 10],
    ],
    rentals: [
      [0, 1, [1, 0], 10],
      [1, 2, [2], 24],
      [2, 3, [3], 5],
      [3, 4, [2, 3], 48],
      [4, 1, [1, 0], 10],
      [5, 2, [1], 24],
      [6, 3, [3, 2], 5],
      [7, 4, [2, 3, 4], 100],
      [8, 0, [4], 10],
      [9, 0, [4], 5],
      [10, 2, [4], 50],
    ],
  };

  expect(calculateAmountsOwing(data1, 10)).toEqual({ John: 22, Sara: 26.25 });
  expect(calculateAmountsOwing(data2, 15)).toEqual({
    John: 23.9,
    Lea: 23.5,
    Sara: 96.16,
    Bob: 21.25,
    Eric: 15,
  });
  expect(calculateAmountsOwing(data3, 25)).toEqual({
    John: 25,
    Lea: 25,
    Sara: 144.55,
    Bob: 176.92,
    Eric: 198.5,
  });
});
