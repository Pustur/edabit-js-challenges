const afterNYears = (people, years) =>
  Object.fromEntries(
    Object.entries(people).map(([name, age]) => [name, age + Math.abs(years)]),
  );

export default afterNYears;
