import censorString from './index';

test('censorString', () => {
  expect(
    censorString('The cow jumped over the moon.', ['cow', 'over'], '*'),
  ).toBe('The *** jumped **** the moon.');
  expect(
    censorString(
      'Why do my cats keep eating grass?',
      ['Why', 'keep', 'eating'],
      '!',
    ),
  ).toBe('!!! do my cats !!!! !!!!!! grass?');
  expect(
    censorString(
      "I'm dyslexic, but that deos'tn matter!",
      ['that', 'matter!'],
      '?',
    ),
  ).toBe("I'm dyslexic, but ???? deos'tn ???????");
  expect(
    censorString(
      'How do I stop myself from using python!?',
      ['do', 'stop', 'using'],
      '-',
    ),
  ).toBe('How -- I ---- myself from ----- python!?');
  expect(
    censorString(
      'If statements are pretty fun to use.',
      ['statements', 'pretty', 'to'],
      '~~',
    ),
  ).toBe('If ~~~~~~~~~~~~~~~~~~~~ are ~~~~~~~~~~~~ fun ~~~~ use.');
  expect(
    censorString(
      'I should be doing work but I am doing this instead.',
      ['should', 'but', 'this'],
      '*',
    ),
  ).toBe('I ****** be doing work *** I am doing **** instead.');
});
