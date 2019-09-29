import completelyFilled from './index';

test('Box Completely Filled?', () => {
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
