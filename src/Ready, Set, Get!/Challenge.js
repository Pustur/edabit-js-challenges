class Challenge {
  constructor(id, level) {
    this.id = id;
    this.level = level;
  }

  get points() {
    return {
      VE: 5,
      EA: 10,
      ME: 20,
      HA: 40,
      VH: 80,
      EX: 120,
    }[this.level];
  }
}

export default Challenge;
