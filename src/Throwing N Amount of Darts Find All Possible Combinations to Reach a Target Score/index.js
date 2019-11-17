const dartsSolver = (sections, dartsLeft, target) => {
  if (dartsLeft <= 1) return sections.includes(target) ? [target] : [];

  return sections.reduce((solutions, section, i) => {
    if (section >= target) return solutions;

    const possibilities = dartsSolver(
      sections.slice(i),
      dartsLeft - 1,
      target - section,
    ).map(possibility => `${section}-${possibility}`);

    return solutions.concat(...possibilities);
  }, []);
};

export default dartsSolver;
