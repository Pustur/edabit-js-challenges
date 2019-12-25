const isUndulating = num => /^((\d)\d)(\2|\1+|\1+\2)$/.test(num);

export default isUndulating;
