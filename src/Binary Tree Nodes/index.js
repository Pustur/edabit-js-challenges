const nodeType = (nodes, parents, targetNode) => {
  const index = nodes.indexOf(targetNode);

  if (index === -1) return 'Not exist';
  if (parents[index] === -1) return 'Root';
  return parents.includes(targetNode) ? 'Inner' : 'Leaf';
};

export default nodeType;
