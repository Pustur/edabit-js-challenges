import battle from './index';

test('battle', () => {
  expect(
    battle({ pHP: 90, pATT: 9, pDEF: 10, pPOT: 8, mHP: 300, mATT: 8, mDEF: 4 }),
  ).toBe('Victory in 29 rounds');
  expect(
    battle({ pHP: 12, pATT: 7, pDEF: 6, pPOT: 2, mHP: 30, mATT: 8, mDEF: 10 }),
  ).toBe('Game Over in 5 rounds');
  expect(
    battle({
      pHP: 10,
      pATT: 10,
      pDEF: 10,
      pPOT: 0,
      mHP: 20,
      mATT: 6,
      mDEF: 14,
    }),
  ).toBe('Victory in 4 rounds');
  expect(
    battle({
      pHP: 10,
      pATT: 10,
      pDEF: 10,
      pPOT: 2,
      mHP: 10,
      mATT: 8,
      mDEF: 14,
    }),
  ).toBe('Victory in 3 rounds');
  expect(
    battle({
      pHP: 100,
      pATT: 12,
      pDEF: 8,
      pPOT: 3,
      mHP: 200,
      mATT: 14,
      mDEF: 8,
    }),
  ).toBe('Game Over in 5 rounds');
  expect(
    battle({
      pHP: 300,
      pATT: 5,
      pDEF: 4,
      pPOT: 0,
      mHP: 120,
      mATT: 10,
      mDEF: 6,
    }),
  ).toBe('Game Over in 19 rounds');
  expect(
    battle({
      pHP: 230,
      pATT: 3,
      pDEF: 20,
      pPOT: 2,
      mHP: 140,
      mATT: 12,
      mDEF: 4,
    }),
  ).toBe('Game Over in 64 rounds');
  expect(
    battle({
      pHP: 1480,
      pATT: 16,
      pDEF: 16,
      pPOT: 4,
      mHP: 860,
      mATT: 14,
      mDEF: 20,
    }),
  ).toBe('Victory in 72 rounds');
});
