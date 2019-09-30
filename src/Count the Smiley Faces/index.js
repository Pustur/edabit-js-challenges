const countSmileys = arr =>
  arr.filter(str => /^[:;][-~]?[)D]$/.test(str)).length;

export default countSmileys;
