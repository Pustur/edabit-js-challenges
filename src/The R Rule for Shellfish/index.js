const shellFish = date =>
  /R/i.test(date.toLocaleString('en', { month: 'long' })) ? 'safe' : 'unsafe';

export default shellFish;
