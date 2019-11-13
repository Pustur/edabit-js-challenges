import User from './User';
import Challenge from './Challenge';

const user1 = new User('Madam');
const user2 = new User('Steve');

const challenge1 = new Challenge(1, 'VE');
const challenge2 = new Challenge(2, 'EA');
const challenge3 = new Challenge(3, 'ME');
const challenge4 = new Challenge(4, 'HA');
const challenge5 = new Challenge(5, 'VH');
const challenge6 = new Challenge(6, 'EX');

user1.newSolvedChallenge(challenge1);
user1.newSolvedChallenge(challenge4);
user1.newSolvedChallenge(challenge6);

user2.newSolvedChallenge(challenge5);
user2.newSolvedChallenge(challenge3);
user2.newSolvedChallenge(challenge2);

export {
  user1,
  user2,
  challenge1,
  challenge2,
  challenge3,
  challenge4,
  challenge5,
  challenge6,
};
