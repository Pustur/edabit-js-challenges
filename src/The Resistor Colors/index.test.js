import resistorCode from './index';

test('resistorCode', () => {
  expect(resistorCode(['black', 'blue', 'black', 'brown'])).toBe('6Ω ±1%');
  expect(resistorCode(['red', 'yellow', 'blue', 'green'])).toBe('24MΩ ±0.5%');
  expect(resistorCode(['brown', 'violet', 'red', 'silver'])).toBe('1.7kΩ ±10%');
  expect(resistorCode(['white', 'black', 'white', 'blue', 'gold'])).toBe(
    '909MΩ ±5%',
  );
  expect(resistorCode(['green', 'gray', 'black', 'silver', 'blue'])).toBe(
    '5.8Ω ±0.25%',
  );
  expect(resistorCode(['orange', 'yellow', 'white', 'gold', 'gray'])).toBe(
    '34.9Ω ±0.05%',
  );
  expect(
    resistorCode(['black', 'white', 'black', 'orange', 'red', 'yellow']),
  ).toBe('90kΩ ±2% 25ppm/k');
  expect(
    resistorCode(['white', 'white', 'white', 'white', 'silver', 'violet']),
  ).toBe('999GΩ ±10% 5ppm/k');
  expect(
    resistorCode(['yellow', 'brown', 'green', 'black', 'green', 'orange']),
  ).toBe('415Ω ±0.5% 15ppm/k');
});
