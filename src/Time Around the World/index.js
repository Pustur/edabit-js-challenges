const citiesTimeZoneOffsets = {
  'Los Angeles': -480,
  'New York': -300,
  'Caracas': -270,
  'Buenos Aires': -180,
  'London': 0,
  'Rome': 60,
  'Moscow': 180,
  'Tehran': 210,
  'New Delhi': 330,
  'Beijing': 480,
  'Canberra': 600,
};

const timeDifference = (cityA, dateStr, cityB) => {
  const timeZoneA = citiesTimeZoneOffsets[cityA];
  const timeZoneB = citiesTimeZoneOffsets[cityB];
  const timeZoneDiff = timeZoneB - timeZoneA;
  const date = new Date(dateStr);

  return new Date(date.setMinutes(date.getMinutes() + timeZoneDiff))
    .toISOString()
    .slice(0, 16)
    .replace(/-0/g, '-')
    .replace('T', ' ');
};

export default timeDifference;
