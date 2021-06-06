const digitalCipher = (message, key) => {
  const keyStr = String(key).repeat(message.length);
  const aCharCode = 'a'.charCodeAt(0);

  return Array.from(
    message,
    (char, i) => char.charCodeAt(0) - aCharCode + 1 + Number(keyStr[i]),
  );
};

export default digitalCipher;
