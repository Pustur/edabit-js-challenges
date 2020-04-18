const capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1);

const makeTitle = str => str.split(' ').map(capitalize).join(' ');

export default makeTitle;
