import sigilize from './index';

test('sigilize', () => {
  expect(sigilize('i am healthy')).toBe('MLTHY');
  expect(sigilize('I FOUND MY SOULMATE')).toBe('FNDYSLMT');
  expect(sigilize('My business is financially successful')).toBe('MBNYCSFL');
  expect(sigilize('I HAVE WONDERFUL FRIENDS WHO LOVE ME')).toBe('FRNDSWHLVM');
  expect(sigilize('I have a job I enjoy and it pays well')).toBe(
    'HVBJNDTPYSWL',
  );
  expect(sigilize('I heard the song closing time playing on the radio')).toBe(
    'CSMPLYGNTHRD',
  );
});
