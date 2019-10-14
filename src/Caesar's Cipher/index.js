const CHARS_IN_ALPHABET = 26;

const mod = (a, b) => ((a % b) + b) % b;

const caesarCipher = (str, turns) => {
  const ACharCode = 'A'.charCodeAt();
  const aCharCode = 'a'.charCodeAt();

  return str.replace(/[a-z]/gi, match => {
    const charCode = match === match.toUpperCase() ? ACharCode : aCharCode;
    const newCharCode =
      mod(match.charCodeAt() - charCode + turns, CHARS_IN_ALPHABET) + charCode;

    return String.fromCharCode(newCharCode);
  });
};

export default caesarCipher;
