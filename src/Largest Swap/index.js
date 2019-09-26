const largestSwap = num => {
  const [first, second] = String(num);
  return num >= Number(second + first);
};

export default largestSwap;
