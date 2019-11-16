const BOARD_SIZE = 5;

const getNeighbours = ([letter, number]) => {
  const charCode = letter.charCodeAt();
  const num = Number(number);

  return [
    String.fromCharCode(charCode - 1) + num,
    String.fromCharCode(charCode) + (num + 1),
    String.fromCharCode(charCode + 1) + num,
    String.fromCharCode(charCode) + (num - 1),
  ];
};

class Battleship {
  constructor(ships, guesses) {
    this.ships = ships;
    this.guesses = guesses;
  }

  isShip(cell) {
    return this.ships.includes(cell);
  }

  isGuessed(cell) {
    return this.guesses.includes(cell);
  }

  board() {
    return Array.from({ length: BOARD_SIZE }, (_, y) => {
      return Array.from({ length: BOARD_SIZE }, (_, x) => {
        const cell = String.fromCharCode('A'.charCodeAt() + y) + (x + 1);
        const isGuessed = this.isGuessed(cell);

        if (this.isShip(cell)) return isGuessed ? '☀' : '●';
        return isGuessed ? '☼' : '○';
      });
    });
  }

  hits() {
    return this.guesses.filter(this.isShip, this).length;
  }

  sunk() {
    return this.guesses.reduce((total, guess) => {
      if (!this.isShip(guess)) return total;

      const neighboursHit = getNeighbours(guess).filter(
        neighbour => this.isShip(neighbour) && this.isGuessed(neighbour),
      ).length;

      return total + neighboursHit / 2;
    }, 0);
  }

  points() {
    return this.hits() + this.sunk() * 2;
  }
}

export default Battleship;
