import edabitInString from './index';

test('edabitInString', () => {
  expect(edabitInString('eddaaabt')).toBe('NO');
  expect(edabitInString('edisthebestatthis')).toBe('NO');
  expect(edabitInString('edwardisabletodoittoo')).toBe('YES');
  expect(edabitInString('teachandlearnbitbybit')).toBe('YES');
  expect(edabitInString('abecdfghijklmnopqrstuvwxyz')).toBe('NO');
  expect(
    edabitInString(
      'fjkdlkskkkkkdkkdkdedaaakkjkkdkkdklqiieuirooeizooziiciibiiiiifooiioiiuuyeyttgguoosooodiifiufiiodikkjkls',
    ),
  ).toBe('YES');
});
