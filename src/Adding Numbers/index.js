const add = (...nums) => {
  const invalidValues = [null, undefined, ''];
  if (nums.some(num => invalidValues.includes(num))) return 'Invalid Operation';
  return String(Number(nums[0]) + Number(nums[1]));
};

export default add;
