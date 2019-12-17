const numberGroups = (...gropus) => {
  const sharedNumbers = gropus.reduce((shared, group, i) => {
    const others = gropus.filter((_, index) => index !== i).flat();
    return shared.concat(group.filter(num => others.includes(num)));
  }, []);

  return Array.from(new Set(sharedNumbers)).sort((a, b) => a - b);
};

export default numberGroups;
