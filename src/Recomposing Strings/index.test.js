import recompose from './index';

test('recompose', () => {
  expect(recompose('KiKdaola')).toBe('Kid Koala');
  expect(recompose('AhpewTxin')).toBe('Aphex Twin');
  expect(recompose('MuosOeMnasr')).toBe('Mouse On Mars');
  expect(recompose('MassivAettakc')).toBe('Massive Attack');
  expect(recompose('BaosdrOCfanada')).toBe('Boards Of Canada');
  expect(recompose('hCemicarBlohtesr')).toBe('Chemical Brothers');
  expect(recompose('DeosItOffeYdnuoYaeh')).toBe('Does It Offend You Yeah');
});
