const messageGlitch = str =>
  str.replace(/\d+/g, match =>
    String.fromCharCode('a'.charCodeAt() + Number(match) - 1),
  );

export default messageGlitch;
