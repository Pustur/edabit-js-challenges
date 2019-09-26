const sum = arr => arr.reduce((total, num) => total + num, 0);

const freeShipping = order => sum(Object.values(order)) > 50;

export default freeShipping;
