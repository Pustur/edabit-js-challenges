const signAll = (obj, signature) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object') return [key, signAll(value, signature)];
      if (key === 'signature') return [key, signature];
      return [key, value];
    }),
  );

export default signAll;
