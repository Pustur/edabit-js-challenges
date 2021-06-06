const digitalDecipher = (message, key) => {
  const keyStr = String(key).repeat(message.length);
  const aCharCode = 'a'.charCodeAt(0);

  return message
    .map((num, i) => String.fromCharCode(num - keyStr[i] + aCharCode - 1))
    .join('');
};

export default digitalDecipher;
