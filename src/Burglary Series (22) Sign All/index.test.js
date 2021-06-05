import signAll from './index';

test('signAll', () => {
  const signature = Math.random().toString();

  expect(
    signAll(
      {
        kitchen: {
          painting: 100,
          piano: 1000,
          signature: '',
        },
        signature: '',
      },
      signature,
    ),
  ).toEqual({
    kitchen: {
      painting: 100,
      piano: 1000,
      signature,
    },
    signature,
  });
  expect(
    signAll(
      {
        bathroom: {
          stereo: 220,
          signature: '',
        },
        cellar: {
          mirror: 10,
          broom: 90,
          signature: '',
        },
        signature: '',
      },
      signature,
    ),
  ).toEqual({
    bathroom: {
      stereo: 220,
      signature,
    },
    cellar: {
      mirror: 10,
      broom: 90,
      signature,
    },
    signature,
  });
});
