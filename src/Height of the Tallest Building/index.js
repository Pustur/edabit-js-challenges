const METERS_PER_ROW = 20;

const tallestBuildingHeight = arr =>
  `${(arr.length - arr.findIndex(row => row.includes('#'))) * METERS_PER_ROW}m`;

export default tallestBuildingHeight;
