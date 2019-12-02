const duplicates = str => str.length - new Set(str).size;

export default duplicates;
