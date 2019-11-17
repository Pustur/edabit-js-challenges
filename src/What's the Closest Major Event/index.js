const closestEvent = (events, date) =>
  events.sort(
    (a, b) =>
      Math.abs(date - new Date(a.date)) - Math.abs(date - new Date(b.date)),
  )[0].name;

export default closestEvent;
