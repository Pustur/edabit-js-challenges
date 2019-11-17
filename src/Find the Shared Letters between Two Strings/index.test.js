import sharedLetters from './index';

test('sharedLetters', () => {
  expect(sharedLetters('Aa', 'aA')).toBe('a');
  expect(sharedLetters('house', 'villa')).toBe('');
  expect(sharedLetters('Micky', 'mouse')).toBe('m');
  expect(sharedLetters('house', 'home')).toBe('eho');
  expect(sharedLetters('Edabit', 'Matt')).toBe('at');
  expect(sharedLetters('🙂😀😄😁', '🙂😞😔😣')).toBe('🙂');
  expect(sharedLetters('Javascript', 'Swift')).toBe('ist');
  expect(
    sharedLetters('https://www.example.com', 'https://www.canada.ca'),
  ).toBe('./:achpstw');
  expect(
    sharedLetters('My dog is a GOOD BOY 🐶', 'Do you like ice cream? 🍦'),
  ).toBe(' adimoy');
  expect(
    sharedLetters('Functional programming', 'Object oriented programming'),
  ).toBe(' acgimnoprt');
});
