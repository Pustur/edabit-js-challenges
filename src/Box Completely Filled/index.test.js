import test from 'ava';
import completelyFilled from './index';

test('Box Completely Filled?', t => {
  t.is(completelyFilled(['#']), true);
  t.is(completelyFilled(['##', '##']), true);
  t.is(completelyFilled(['###', '#*#', '###']), true);
  t.is(completelyFilled(['#####', '#***#', '#***#', '#***#', '#####']), true);
  t.is(completelyFilled(['#####', '#* *#', '#***#', '#***#', '#####']), false);
  t.is(
    completelyFilled([
      '######',
      '#****#',
      '#****#',
      '#****#',
      '#****#',
      '######',
    ]),
    true,
  );
  t.is(
    completelyFilled([
      '######',
      '#* **#',
      '#****#',
      '#* **#',
      '#*** #',
      '######',
    ]),
    false,
  );
  t.is(
    completelyFilled([
      '######',
      '#* **#',
      '#* **#',
      '#* **#',
      '#* **#',
      '######',
    ]),
    false,
  );
});
