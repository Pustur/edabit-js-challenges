const mirror = arr => [...arr, ...arr.reverse().slice(1)];

export default mirror;
