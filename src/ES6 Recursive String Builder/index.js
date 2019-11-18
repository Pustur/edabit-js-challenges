const createProxy = func =>
  new Proxy(func, { get: (_, prop) => createProxy(func.bind(null, prop)) });

const getStringBuilder = () => createProxy((...strings) => strings.join(' '));

export default getStringBuilder;
