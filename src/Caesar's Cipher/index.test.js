import caesarCipher from './index';

test('caesarCipher', () => {
  expect(caesarCipher('middle-Outz', 2)).toBe('okffng-Qwvb');
  expect(caesarCipher('A friend in need is a friend indeed', 20)).toBe(
    'U zlcyhx ch hyyx cm u zlcyhx chxyyx',
  );
  expect(caesarCipher('A Fool and His Money Are Soon Parted.', 27)).toBe(
    'B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.',
  );
  expect(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5)).toBe(
    'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj',
  );
  expect(
    caesarCipher(
      'One should not worry over things that have already happened and that cannot be changed.',
      49,
    ),
  ).toBe(
    'Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.',
  );
  expect(
    caesarCipher(
      'Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.',
      126,
    ),
  ).toBe(
    'Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.',
  );
});
