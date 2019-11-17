import closestEvent from './index';

test('closestEvent', () => {
  const events = [
    { date: '2005-08-23', name: 'Hurricane Katrina' },
    {
      date: '2004-12-26',
      name: 'Indian Ocean Earthquake and Tsunami Disaster',
    },
    { date: '1989-11-09', name: 'Fall of the Berlin Wall' },
    { date: '2009-01-15', name: 'Hudson River Plane Crash' },
    { date: '1986-01-28', name: 'Challenger Spacecraft Explodes' },
    { date: '2001-09-11', name: 'September 11 Attacks' },
    { date: '1986-04-26', name: 'Chernobyl Nuclear Disaster' },
    { date: '2011-03-16', name: 'Fukushima Nuclear Disaster' },
  ];

  expect(closestEvent(events, new Date())).toBe('Fukushima Nuclear Disaster');
  expect(closestEvent(events, new Date(2006, 5, 16))).toBe('Hurricane Katrina');
  expect(closestEvent(events, new Date(1995, 9, 12))).toBe(
    'September 11 Attacks',
  );
  expect(closestEvent(events, new Date(1990, 0, 1))).toBe(
    'Fall of the Berlin Wall',
  );
  expect(closestEvent(events, new Date(1995, 9, 11))).toBe(
    'Fall of the Berlin Wall',
  );
  expect(closestEvent(events, new Date(2007, 4, 12))).toBe(
    'Hudson River Plane Crash',
  );
  expect(closestEvent(events, new Date(1986, 2, 14))).toBe(
    'Chernobyl Nuclear Disaster',
  );
  expect(closestEvent(events, new Date(1970, 0, 1))).toBe(
    'Challenger Spacecraft Explodes',
  );
  expect(closestEvent(events, new Date(1986, 2, 13))).toBe(
    'Challenger Spacecraft Explodes',
  );
  expect(closestEvent(events, new Date(2005, 0, 1))).toBe(
    'Indian Ocean Earthquake and Tsunami Disaster',
  );
});
