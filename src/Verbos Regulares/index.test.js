import espVerb from './index';

test('espVerb', () => {
  expect(espVerb('unir')).toBe(
    'Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen.',
  );
  expect(espVerb('abrir')).toBe(
    'Yo abro, tú abres, él abre, nosotros abrimos, vosotros abrís, ellos abren.',
  );
  expect(espVerb('vivir')).toBe(
    'Yo vivo, tú vives, él vive, nosotros vivimos, vosotros vivís, ellos viven.',
  );
  expect(espVerb('pasar')).toBe(
    'Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan.',
  );
  expect(espVerb('deber')).toBe(
    'Yo debo, tú debes, él debe, nosotros debemos, vosotros debéis, ellos deben.',
  );
  expect(espVerb('hablar')).toBe(
    'Yo hablo, tú hablas, él habla, nosotros hablamos, vosotros habláis, ellos hablan.',
  );
  expect(espVerb('correr')).toBe(
    'Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren.',
  );
  expect(espVerb('quedar')).toBe(
    'Yo quedo, tú quedas, él queda, nosotros quedamos, vosotros quedáis, ellos quedan.',
  );
  expect(espVerb('comprender')).toBe(
    'Yo comprendo, tú comprendes, él comprende, nosotros comprendemos, vosotros comprendéis, ellos comprenden.',
  );
});
