import pyramidalString from './index';

test('pyramidalString', () => {
  expect(pyramidalString('', 'REG')).toEqual([]);
  expect(pyramidalString('?', 'REV')).toEqual(['?']);
  expect(pyramidalString('42', 'REV')).toBe('Error!');
  expect(pyramidalString('TRILLIAN', 'REG')).toBe('Error!');
  expect(pyramidalString('DONTPANIC', 'REV')).toBe('Error!');
  expect(pyramidalString('FORDPREFECT', 'REV')).toBe('Error!');
  expect(pyramidalString('ZAPHODBEEBLEBROX', 'REG')).toBe('Error!');
  expect(pyramidalString('MARVIN', 'REV')).toEqual(['M A R', 'V I', 'N']);
  expect(pyramidalString('RESTAURANTATTHEENDOFTHEUNIVERSE', 'REG')).toBe(
    'Error!',
  );
  expect(pyramidalString('ARTHURDENT', 'REV')).toEqual([
    'A R T H',
    'U R D',
    'E N',
    'T',
  ]);
  expect(pyramidalString('HOTBLACKDESIATO', 'REG')).toEqual([
    'H',
    'O T',
    'B L A',
    'C K D E',
    'S I A T O',
  ]);
  expect(pyramidalString('APERFECTLYNORMALBEAST', 'REG')).toEqual([
    'A',
    'P E',
    'R F E',
    'C T L Y',
    'N O R M A',
    'L B E A S T',
  ]);
  expect(pyramidalString('THEHITCHIKERGUIDETOTHEGALAXY', 'REG')).toEqual([
    'T',
    'H E',
    'H I T',
    'C H I K',
    'E R G U I',
    'D E T O T H',
    'E G A L A X Y',
  ]);
  expect(pyramidalString('LIFETHEUNIVERSEANDEVERYTHING', 'REV')).toEqual([
    'L I F E T H E',
    'U N I V E R',
    'S E A N D',
    'E V E R',
    'Y T H',
    'I N',
    'G',
  ]);
});
