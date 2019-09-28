const length = str => (str ? length(str.slice(1)) + 1 : 0);

export default length;
