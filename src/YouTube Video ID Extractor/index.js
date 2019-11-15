const youtubeId = url => url.replace(/.+(?:\/|v=)([\w-]{11}).*/, '$1');

export default youtubeId;
