import conjugate from './index';

test('conjugate', () => {
  expect(conjugate('negare', 2)).toBe('Tu neghi');
  expect(conjugate('nuotare', 1)).toBe('Io nuoto');
  expect(conjugate('parlare', 1)).toBe('Io parlo');
  expect(conjugate('iniziare', 2)).toBe('Tu inizi');
  expect(conjugate('sognare', 3)).toBe('Egli sogna');
  expect(conjugate('cambiare', 3)).toBe('Egli cambia');
  expect(conjugate('tagliare', 4)).toBe('Noi tagliamo');
  expect(conjugate('mancare', 4)).toBe('Noi manchiamo');
  expect(conjugate('insegnare', 5)).toBe('Voi insegnate');
  expect(conjugate('edabittare', 4)).toBe('Noi edabittiamo');
  expect(conjugate('programmare', 5)).toBe('Voi programmate');
});
