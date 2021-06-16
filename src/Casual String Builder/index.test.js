import stringBuilder from './index';

test('stringBuilder', () => {
  expect(stringBuilder('3[a]2[bc]')).toBe('aaabcbc');
  expect(stringBuilder('3[a2[c]]')).toBe('accaccacc');
  expect(stringBuilder('abc3[cd]xyz')).toBe('abccdcdcdxyz');
  expect(stringBuilder('2[abc]3[cd]ef')).toBe('abcabccdcdcdef');
  expect(stringBuilder('weg2[a]2[Bc3[y]2[z]]drop')).toBe(
    'wegaaBcyyyzzBcyyyzzdrop',
  );
  expect(stringBuilder('a_2[1[z]2[o]k2[e]per_]l2[o]ks')).toBe(
    'a_zookeeper_zookeeper_looks',
  );
  expect(stringBuilder('1[Mubashir_]i3[s]1[_Air]1[_Force]1[_Fan]')).toBe(
    'Mubashir_isss_Air_Force_Fan',
  );
  expect(stringBuilder('Dorothy_3[sings_]2[sl2[e]py_]1[tunes]')).toBe(
    'Dorothy_sings_sings_sings_sleepy_sleepy_tunes',
  );
  expect(stringBuilder('2[a4[bc5[x2[o]]]]')).toBe(
    'abcxooxooxooxooxoobcxooxooxooxooxoobcxooxooxooxooxoobcxooxooxooxooxooabcxooxooxooxooxoobcxooxooxooxooxoobcxooxooxooxooxoobcxooxooxooxooxoo',
  );
  expect(stringBuilder('g2[o]d_13[Eda2[bit]]_for_a2[l]')).toBe(
    'good_EdabitbitEdabitbitEdabitbitEdabitbitEdabitbitEdabitbitEdabitbitEdabitbitEdabitbitEdabitbitEdabitbitEdabitbitEdabitbit_for_all',
  );
});
