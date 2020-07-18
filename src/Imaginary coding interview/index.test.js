import interview from './index';

test('interview', () => {
  expect(interview([2, 3, 8, 6, 5, 12, 10, 18], 64)).toBe('qualified');
  expect(interview([2, 3, 8, 6, 5, 12, 10, 18], 120)).toBe('qualified');
  expect(interview([10, 10, 15, 15, 20, 20], 150)).toBe('disqualified');
  expect(interview([5, 5, 10, 10, 15, 15, 20], 120)).toBe('disqualified');
  expect(interview([5, 5, 10, 10, 15, 20, 50], 160)).toBe('disqualified');
  expect(interview([5, 5, 10, 10, 15, 15, 40], 120)).toBe('disqualified');
  expect(interview([5, 5, 10, 10, 15, 15, 20, 20], 120)).toBe('qualified');
  expect(interview([5, 5, 10, 10, 25, 15, 20, 20], 120)).toBe('disqualified');
  expect(interview([5, 5, 10, 10, 15, 15, 20, 20], 130)).toBe('disqualified');
  expect(interview([5, 5, 10, 20, 15, 15, 20, 20], 140)).toBe('disqualified');
});
