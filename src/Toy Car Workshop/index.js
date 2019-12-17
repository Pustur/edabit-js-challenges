const cars = (wheels, bodies, figures) =>
  Math.floor(Math.min(wheels / 4, bodies, figures / 2));

export default cars;
