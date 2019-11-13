import {
  user1,
  user2,
  challenge1,
  challenge2,
  challenge3,
  challenge4,
  challenge5,
  challenge6,
} from './index';

test('user1', () => {
  expect(user1.name).toBe('Madam');
  expect(user1.xp).toBe(165);
  expect(user1.log).toEqual([1, 4, 6]);
});

test('user2', () => {
  expect(user2.name).toBe('Steve');
  expect(user2.xp).toBe(110);
  expect(user2.log).toEqual([5, 3, 2]);
});

test('challenges', () => {
  expect(challenge1.id).toBe(1);
  expect(challenge2.level).toBe('EA');
  expect(challenge3.points).toBe(20);
  expect(challenge4.id).toBe(4);
  expect(challenge5.level).toBe('VH');
  expect(challenge6.points).toBe(120);
});

test('other', () => {
  expect(user1.xp > user2.xp).toBe(true);
  expect(challenge6.points < challenge1.points).toBe(false);
});
