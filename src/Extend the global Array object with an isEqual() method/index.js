function isEqual(arr, ignoreOrder) {
  if (ignoreOrder) {
    this.sort();
    arr.sort();
  }

  return JSON.stringify(this) === JSON.stringify(arr);
}

export default isEqual;
