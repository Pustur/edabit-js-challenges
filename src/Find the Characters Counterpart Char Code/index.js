const counterpartCharCode = char =>
  char === char.toUpperCase()
    ? char.toLowerCase().charCodeAt()
    : char.toUpperCase().charCodeAt();

export default counterpartCharCode;
