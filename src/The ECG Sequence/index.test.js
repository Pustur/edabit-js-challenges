import ecgSequenceIndex from './index';

test('ecgSequenceIndex', () => {
  expect(ecgSequenceIndex(3)).toBe(4);
  expect(ecgSequenceIndex(5)).toBe(9);
  expect(ecgSequenceIndex(7)).toBe(13);
  expect(ecgSequenceIndex(18)).toBe(11);
  expect(ecgSequenceIndex(33)).toBe(20);
  expect(ecgSequenceIndex(44)).toBe(40);
  expect(ecgSequenceIndex(69)).toBe(43);
  expect(ecgSequenceIndex(75)).toBe(68);
  expect(ecgSequenceIndex(101)).toBe(188);
  expect(ecgSequenceIndex(208)).toBe(199);
  expect(ecgSequenceIndex(300)).toBe(281);
});
