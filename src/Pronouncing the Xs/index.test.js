import xPronounce from './index';

test('xPronounce', () => {
  expect(xPronounce('Anti vax')).toBe('Anti vacks');
  expect(xPronounce('Max bax pax')).toBe('Macks backs packs');
  expect(xPronounce('The x ray is excellent')).toBe(
    'The ecks ray is eckscellent',
  );
  expect(xPronounce('OMG xylem unboxing video x D')).toBe(
    'OMG zylem unbocksing video ecks D',
  );
  expect(xPronounce('Inside the box was a xylophone')).toBe(
    'Inside the bocks was a zylophone',
  );
  expect(xPronounce('OMG x box unboxing video x D')).toBe(
    'OMG ecks bocks unbocksing video ecks D',
  );
  expect(xPronounce('this test does not have an x in it')).toBe(
    'this test does not have an ecks in it',
  );
  expect(xPronounce('Who is xavier and why does he have my car')).toBe(
    'Who is zavier and why does he have my car',
  );
  expect(xPronounce('I gotta make bux but the clox are ticking!')).toBe(
    'I gotta make bucks but the clocks are ticking!',
  );
});
