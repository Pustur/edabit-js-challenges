const splitCode = str => [
  str.replace(/\d+/, ''),
  Number(str.replace(/\D+/, '')),
];

export default splitCode;
