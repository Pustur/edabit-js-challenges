import countByValue from './index';

// prettier-ignore
const vehicles = [
  { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
  { make: "toyota", color: "blue", engine: "v6", type: "hatchback", year: 2018, mileage: 324312, isUsed: true },
  { make: "toyota", color: "yellow", engine: "v6", type: "hatchback", year: 2018, mileage: 113452, isUsed: false },
  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
  { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
];

// prettier-ignore
const vehiclesAsObject = {
  stall1: { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
  stall2: { make: "toyota", color: "blue", engine: "v6", type: "hatchback", year: 2018, mileage: 324312, isUsed: true },
  stall3: { make: "toyota", color: "yellow", engine: "v6", type: "hatchback", year: 2018, mileage: 113452, isUsed: false },
  stall4: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  stall5: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  stall6: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  stall7: { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
  stall8: { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
};

test('countByValue', () => {
  expect(countByValue(vehicles, 'engine')).toEqual({ v6: 3, v4: 3, v8: 2 });
  expect(countByValue(vehicles, 'make')).toEqual({
    toyota: 3,
    ford: 4,
    mazda: 1,
  });
  expect(countByValue(vehicles, d => d.year > 2020)).toEqual({
    false: 7,
    true: 1,
  });
  expect(countByValue(vehicles, car => car.mileage > 10000)).toEqual({
    true: 4,
    false: 4,
  });
  expect(countByValue(vehiclesAsObject, 'type')).toEqual({
    hatchback: 3,
    car: 3,
    sedan: 1,
    truck: 1,
  });
  expect(countByValue(vehiclesAsObject, 'mileage')).toEqual({
    0: 4,
    25467: 1,
    113312: 1,
    113452: 1,
    324312: 1,
  });
});
