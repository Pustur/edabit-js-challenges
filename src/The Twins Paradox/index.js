const twins = (age, distance, velocity) => {
  const tripTime = (distance / velocity) * 2;
  const jill = age + tripTime;
  const jack = age + tripTime * Math.sqrt(1 - velocity ** 2);

  return `Jack's age is ${jack.toFixed(1)}, Jill's age is ${jill.toFixed(1)}`;
};

export default twins;
