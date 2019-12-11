import digitalVowelBan from './index';

test('digitalVowelBan', () => {
  expect(digitalVowelBan(143, 'o')).toBe(3);
  expect(digitalVowelBan(586, 'i')).toBe('Banned Number');
  expect(digitalVowelBan(1100, 'u')).toBe(1100);
  expect(digitalVowelBan(1993, 'e')).toBe('Banned Number');
  expect(digitalVowelBan(4020, 'u')).toBe(20);
  expect(digitalVowelBan(20442, 'o')).toBe('Banned Number');
  expect(digitalVowelBan(14266330, 'e')).toBe(4266);
  expect(digitalVowelBan(79284426, 'o')).toBe(7986);
  expect(digitalVowelBan(123456789, 'i')).toBe(12347);
  expect(digitalVowelBan(123456789, 'a')).toBe(123456789);
  expect(digitalVowelBan(90160350102, 'e')).toBe(62);
});
