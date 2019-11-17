import imgurUrlParser from './index';

test('imgurUrlParser', () => {
  const results = {
    album: { id: 'cjh4E', type: 'album' },
    gallery: { id: '59npG', type: 'gallery' },
    directImage: { id: 'altd8Ld', type: 'image' },
    image: { id: 'OzZUNMM', type: 'image' },
  };

  expect(imgurUrlParser('http://imgur.com/a/cjh4E')).toEqual(results.album);
  expect(imgurUrlParser('http://imgur.com/OzZUNMM')).toEqual(results.image);
  expect(imgurUrlParser('http://imgur.com/a/cjh4E/zip')).toEqual(results.album);
  expect(imgurUrlParser('i.imgur.com/altd8Ld.png')).toEqual(
    results.directImage,
  );
  expect(imgurUrlParser('http://imgur.com/gallery/59npG')).toEqual(
    results.gallery,
  );
  expect(imgurUrlParser('www.i.imgur.com/altd8Ld.png')).toEqual(
    results.directImage,
  );
  expect(imgurUrlParser('http://i.imgur.com/altd8Ld.png')).toEqual(
    results.directImage,
  );
  expect(imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF')).toEqual(
    results.gallery,
  );
});
