// prettier-ignore
const table = {
  black:  [0,    1e0,  null, null],
  brown:  [1,    1e1,  1,    100 ],
  red:    [2,    1e2,  2,    50  ],
  orange: [3,    1e3,  null, 15  ],
  yellow: [4,    1e4,  null, 25  ],
  green:  [5,    1e5,  0.5,  null],
  blue:   [6,    1e6,  0.25, 10  ],
  violet: [7,    1e7,  0.1,  5   ],
  gray:   [8,    1e8,  0.05, null],
  white:  [9,    1e9,  null, null],
  gold:   [null, 1e-1, 5,    null],
  silver: [null, 1e-2, 10,   null],
};

const formatNumber = num => {
  const symbols = ' kMG';
  const index = Math.trunc(Math.log10(num) / 3);

  if (index === 0) return num;

  const scale = 10 ** (index * 3);
  const scaled = num / scale;

  return scaled + symbols[index];
};

const resistorCode = colors => {
  const { length } = colors;
  const digitColors = length > 4 ? colors.splice(0, 3) : colors.splice(0, 2);
  const magnitude = table[colors.shift()][1];
  const ohms =
    Number(digitColors.map(color => table[color][0]).join('')) * magnitude;
  const tolerance = table[colors.shift()][2];
  const coefficient = length === 6 ? `${table[colors.shift()][3]}ppm/k` : '';

  return `${formatNumber(ohms)}Ω ±${tolerance}% ${coefficient}`.trim();
};

export default resistorCode;
