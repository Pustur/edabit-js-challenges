import completelyFilled from './index';

test('completelyFilled', () => {
  expect(completelyFilled(['#'])).toBe(true);
  expect(completelyFilled(['##', '##'])).toBe(true);
  expect(completelyFilled(['###', '#*#', '###'])).toBe(true);
  expect(completelyFilled(['#####', '#***#', '#***#', '#***#', '#####'])).toBe(
    true,
  );
  expect(completelyFilled(['#####', '#* *#', '#***#', '#***#', '#####'])).toBe(
    false,
  );
  expect(
    completelyFilled([
      '######',
      '#****#',
      '#****#',
      '#****#',
      '#****#',
      '######',
    ]),
  ).toBe(true);
  expect(
    completelyFilled([
      '######',
      '#* **#',
      '#****#',
      '#* **#',
      '#*** #',
      '######',
    ]),
  ).toBe(false);
  expect(
    completelyFilled([
      '######',
      '#* **#',
      '#* **#',
      '#* **#',
      '#* **#',
      '######',
    ]),
  ).toBe(false);
});
