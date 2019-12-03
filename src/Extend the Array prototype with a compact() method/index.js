function compact() {
  const filtered = this.filter(val => [0, false].includes(val) || val);
  return Array.from(new Set(filtered));
}

export default compact;
