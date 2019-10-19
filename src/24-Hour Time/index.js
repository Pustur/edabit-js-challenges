const convertTime = str => {
  const [time, ampm] = [str.slice(0, -2), str.slice(-2)];
  const units = time.split(':');
  const [, minutes, seconds] = units;
  let [hours] = units;

  if (hours === '12') hours = '00';
  if (ampm === 'PM') hours = Number(hours) + 12;

  return [hours, minutes, seconds].join(':');
};

export default convertTime;
