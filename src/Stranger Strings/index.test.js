import strangerStrings from './index';

test('strangerStrings', () => {
  expect(strangerStrings('8 𝟡4 3𝟞')).toEqual([15, '𝟡𝟞']);
  expect(strangerStrings('9   2 21 8')).toEqual([22, '']);
  expect(strangerStrings('𝟝 𝟚003   9')).toEqual([12, '𝟝𝟚']);
  expect(strangerStrings('𝟚2 𝟛3 𝟘0 𝟙1')).toEqual([6, '𝟛𝟚𝟙𝟘']);
  expect(strangerStrings('7𝟝   16𝟞 𝟟5𝟟')).toEqual([19, '𝟟𝟟𝟞𝟝']);
  expect(strangerStrings('0𝟝𝟞   𝟞𝟟𝟡 𝟡')).toEqual([0, '𝟡𝟡𝟟𝟞𝟞𝟝']);
  expect(strangerStrings('32   000𝟜0 0 00𝟙𝟟')).toEqual([5, '𝟟𝟜𝟙']);
});
