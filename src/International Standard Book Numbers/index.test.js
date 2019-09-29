import isbn13 from './index';

test('International Standard Book Numbers', t => {
  t.is(isbn13('9780316066525'), 'Valid');
  t.is(isbn13('9783866155237'), 'Valid');
  t.is(isbn13('9780345453747'), 'Valid');
  t.is(isbn13('9783876155237'), 'Invalid');
  t.is(isbn13('031606652X'), 'Invalid');
  t.is(isbn13('0345453747'), 'Invalid');
  t.is(isbn13('0316066524'), '9780316066525');
  t.is(isbn13('3866155239'), '9783866155237');
  t.is(isbn13('817450494X'), '9788174504944');
});
