import shiftLetters from './index';

test('shiftLetters', () => {
  expect(shiftLetters('Boom', 0)).toBe('Boom');
  expect(shiftLetters('Boom', 1)).toBe('mBoo');
  expect(shiftLetters('Talk the Talk', 1)).toBe('kTal kth eTal');
  expect(shiftLetters('This is a test', 9)).toBe('isis at e stTh');
  expect(shiftLetters('This is a test', 13)).toBe('stTh is i sate');
  expect(shiftLetters('A B C D E F G H', 4)).toBe('E F G H A B C D');
  expect(shiftLetters('A B C D E F G H', 10)).toBe('G H A B C D E F');
  expect(shiftLetters('Shift the letters', 1)).toBe('sShif tth eletter');
  expect(shiftLetters('Shift the letters', 3)).toBe('ersSh ift thelett');
  expect(shiftLetters('To be or not to be', 6)).toBe('ot to be Tob eo rn');
  expect(shiftLetters('Made by Harith Shah', 15)).toBe('adeb yH arithS hahM');
  expect(shiftLetters('Made by Harith Shah', 18)).toBe('ahMa de byHari thSh');
  expect(shiftLetters('The most addictive way to learn', 5)).toBe(
    'lea rnTh emostaddi cti ve wayto',
  );
  expect(shiftLetters('The most addictive way to learn', 19)).toBe(
    'add icti vewaytole arn Th emost',
  );
  expect(shiftLetters('Birds of a Feather Flock Together', 32)).toBe(
    'therB ir d sofaFea therF lockToge',
  );
  expect(shiftLetters('Edabit helps you learn in bitesize chunks', 39)).toBe(
    'unksEd abith elp syoul ea rninbite sizech',
  );
});
