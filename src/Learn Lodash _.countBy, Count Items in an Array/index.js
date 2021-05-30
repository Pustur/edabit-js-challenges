const countByValue = (collection, iteratee) =>
  Object.values(collection).reduce((obj, item) => {
    const key = typeof iteratee === 'string' ? item[iteratee] : iteratee(item);
    obj[key] = obj[key] + 1 || 1;
    return obj;
  }, {});

export default countByValue;
