import persistence from './index';

test('Persistence', t => {
  t.is(persistence(0), 0);
  t.is(persistence(10), 1);
  t.is(persistence(25), 2);
  t.is(persistence(39), 3);
  t.is(persistence(77), 4);
  t.is(persistence(679), 5);
  t.is(persistence(6788), 6);
  t.is(persistence(68889), 7);
  t.is(persistence(2677889), 8);
  t.is(persistence(26888999), 9);
  t.is(persistence(3778888999), 10);
  t.is(persistence(277777788888899), 11);

  // Additional tests from instructions
  t.is(persistence(9), 0);
  t.is(persistence(12), 1);
  t.is(persistence(678852), 2);
});
