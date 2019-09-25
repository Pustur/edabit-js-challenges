const maskify = str => str.replace(/.(?=.{4})/g, '#');

export default maskify;
