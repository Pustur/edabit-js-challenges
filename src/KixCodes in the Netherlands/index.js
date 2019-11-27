const kixCode = str => {
  const [, address, city] = str.split(', ');
  return (
    city.match(/\d+ [A-Z]{2}/)[0].replace(' ', '') +
    address.slice(address.search(/\d/)).replace(/\W/, 'X')
  ).toUpperCase();
};

export default kixCode;
