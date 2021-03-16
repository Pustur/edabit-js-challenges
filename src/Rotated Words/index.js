const rotatedWords = str => new Set(str.match(/\b[HIMNOSWXZ]+\b/g) || []).size;

export default rotatedWords;
