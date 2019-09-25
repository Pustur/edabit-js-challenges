import test from 'ava';
import oddOneOut from './index';

test('Odd One Out', t => {
  t.is(oddOneOut(['silly', 'mom', 'let', 'the']), true);
  t.is(oddOneOut(['swanky', 'rhino', 'moment']), true);
  t.is(oddOneOut(['very', 'to', 'then', 'some']), true);

  t.is(oddOneOut(['the', 'them', 'theme']), false);
  t.is(oddOneOut(['very', 'to', 'an', 'some']), false);
});
