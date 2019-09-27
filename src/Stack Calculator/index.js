class StackCalc {
  constructor() {
    this.stack = [];
    this.invalidInstruction = false;
  }

  run(instructions) {
    const instructionsArr = instructions.split(' ');

    for (const instruction of instructionsArr) {
      if ('+-*/'.includes(instruction)) {
        const [x, y] = [this.stack.pop(), this.stack.pop()];

        if (typeof x === 'undefined' || typeof y === 'undefined') break;

        if (instruction === '+') this.stack.push(x + y);
        if (instruction === '-') this.stack.push(x - y);
        if (instruction === '*') this.stack.push(x * y);
        if (instruction === '/') this.stack.push(x / y);
      } else if (instruction === 'DUP') {
        this.stack.push(this.stack[this.stack.length - 1]);
      } else if (instruction === 'POP') {
        this.stack.pop();
      } else if (/^-?\d+(\.\d+)?$/.test(instruction)) {
        this.stack.push(Number(instruction));
      } else {
        this.invalidInstruction = instruction;
        break;
      }
    }
  }

  get value() {
    if (this.invalidInstruction) {
      return `Invalid instruction: ${this.invalidInstruction}`;
    }
    return this.stack[this.stack.length - 1] || 0;
  }
}

export default StackCalc;
