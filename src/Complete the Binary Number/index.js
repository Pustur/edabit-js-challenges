const completeBinary = str => str.padStart(Math.ceil(str.length / 8) * 8, '0');

export default completeBinary;
