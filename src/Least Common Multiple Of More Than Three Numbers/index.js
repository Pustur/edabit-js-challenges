const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const lcm = (a, b) => a * (b / gcd(a, b));

const lcmOfArray = arr => arr.reduce(lcm);

export default lcmOfArray;
