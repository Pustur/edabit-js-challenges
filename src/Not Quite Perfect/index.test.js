import admirable from './index';

test('Not Quite Perfect', t => {
  t.is(admirable(6), 'Perfect');
  t.is(admirable(496), 'Perfect');
  t.is(admirable(18), 'Neither');
  t.is(admirable(612), 'Neither');
  t.is(admirable(12), 2);
  t.is(admirable(138), 6);
  t.is(admirable(1876), 28);
  t.is(admirable(5456), 496);
});
