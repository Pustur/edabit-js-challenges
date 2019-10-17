import encryption from './index';

test('encryption', () => {
  expect(encryption('chillout')).toBe('clu hlt io');
  expect(encryption('feedthedog')).toBe('fto ehg ee dd');
  expect(encryption('haveaniceday')).toBe('hae and via ecy');
  expect(encryption('A Fool and His Money Are Soon Parted.')).toBe(
    'Anoea FdnSr oHeot oiyoe lsAnd aMrP.',
  );
  expect(
    encryption(
      'One should not worry over things that have already happened and that cannot be changed.',
    ),
  ).toBe(
    'Onvtlphb. noehreae etraentc swttaech hohhddaa oriayann urnvhnng lygeadoe dosapttd',
  );
  expect(
    encryption(
      'Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.',
    ),
  ).toBe(
    'Brpgatroea aeutpo,:dr cOlhessbrd knaartiaa. tertsamcw oismoriki Ssaentltn qayahoaog upinavrtb aonssetho',
  );
});
