class User {
  constructor(name, xp = 0, log = []) {
    this.name = name;
    this.xp = xp;
    this.log = log;
  }

  newSolvedChallenge(challenge) {
    this.xp += challenge.points;
    this.log.push(challenge.id);
  }
}

export default User;
