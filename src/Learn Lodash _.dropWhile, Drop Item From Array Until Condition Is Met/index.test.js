import dropWhile from './index';

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'donny', active: true },
  { user: 'carl', active: false },
  { user: 'linda', active: false },
  { user: 'luke', active: false },
  { user: 'Steve', active: false },
  { user: 'Lyle', active: false },
  { user: 'pebbles', active: true },
];

test('dropWhile', () => {
  expect(dropWhile(users, b => b.user !== 'Lyle')).toEqual([
    { user: 'Lyle', active: false },
    { user: 'pebbles', active: true },
  ]);
  expect(dropWhile(users, o => !o.active)).toEqual([
    { user: 'donny', active: true },
    { user: 'carl', active: false },
    { user: 'linda', active: false },
    { user: 'luke', active: false },
    { user: 'Steve', active: false },
    { user: 'Lyle', active: false },
    { user: 'pebbles', active: true },
  ]);
  expect(
    dropWhile(
      users,
      b =>
        JSON.stringify(b) === JSON.stringify({ user: 'barney', active: false }),
    ),
  ).toEqual([
    { user: 'fred', active: false },
    { user: 'donny', active: true },
    { user: 'carl', active: false },
    { user: 'linda', active: false },
    { user: 'luke', active: false },
    { user: 'Steve', active: false },
    { user: 'Lyle', active: false },
    { user: 'pebbles', active: true },
  ]);

  // Additional tests
  expect(dropWhile(users, () => true)).toEqual([]);
  expect(dropWhile(users, (_, i) => i !== 8)).toEqual([
    { user: 'pebbles', active: true },
  ]);
});
