const mapLetters = str =>
  Array.from(str).reduce(
    (obj, char, i) => ({ ...obj, [char]: [...(obj[char] || []), i] }),
    {},
  );

export default mapLetters;
