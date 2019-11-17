const imgurUrlParser = url => {
  const [, type, id] = url.match(/imgur\.com\/(?:(a|gallery)\/)?([a-z0-9]+)/i);

  if (type === 'gallery') return { id, type };
  if (type === 'a') return { id, type: 'album' };
  return { id, type: 'image' };
};

export default imgurUrlParser;
