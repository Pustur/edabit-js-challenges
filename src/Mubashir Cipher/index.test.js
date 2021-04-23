import mubashirCipher from './index';

test('mubashirCipher', () => {
  expect(mubashirCipher('%$ &%')).toBe('%$ &%');
  expect(mubashirCipher('matt && is amazing')).toBe('ckff && zv kckizlb');
  expect(mubashirCipher('pakistan is love !')).toBe('wkazvfkl zv njsu !');
  expect(mubashirCipher('edabit is amazing !')).toBe('uqkgzf zv kckizlb !');
  expect(mubashirCipher('airforce needs me ?')).toBe('kzytjymu luuqv cu ?');
  expect(mubashirCipher('evgeny sh is amazing')).toBe('usbulr vx zv kckizlb');
  expect(mubashirCipher('mubashir is not amazing')).toBe(
    'cegkvxzy zv ljf kckizlb',
  );
  expect(mubashirCipher('~!@#$%^&*()_+= -0 98 76 54 3 2 1')).toBe(
    '~!@#$%^&*()_+= -0 98 76 54 3 2 1',
  );
});
