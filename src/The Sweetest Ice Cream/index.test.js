import sweetestIcecream from './index';

class IceCream {
  constructor(flavor, numSprinkles) {
    this.flavor = flavor;
    this.numSprinkles = numSprinkles;
  }
}

const ice1 = new IceCream('Chocolate', 13);
const ice2 = new IceCream('Vanilla', 0);
const ice3 = new IceCream('Strawberry', 7);
const ice4 = new IceCream('Plain', 18);
const ice5 = new IceCream('ChocolateChip', 3);
const ice6 = new IceCream('Chocolate', 23);
const ice7 = new IceCream('Strawberry', 0);
const ice8 = new IceCream('Plain', 34);
const ice9 = new IceCream('Plain', 81);
const ice10 = new IceCream('Vanilla', 12);

test('sweetestIcecream', () => {
  expect(sweetestIcecream([ice3, ice1])).toBe(23);
  expect(sweetestIcecream([ice5, ice7])).toBe(10);
  expect(sweetestIcecream([ice1, ice4])).toBe(23);
  expect(sweetestIcecream([ice7, ice4])).toBe(18);
  expect(sweetestIcecream([ice6, ice6])).toBe(33);
  expect(sweetestIcecream([ice8, ice6])).toBe(34);
  expect(sweetestIcecream([ice1, ice1])).toBe(23);
  expect(sweetestIcecream([ice10, ice3])).toBe(17);
  expect(sweetestIcecream([ice4, ice8, ice9])).toBe(81);
  expect(sweetestIcecream([ice4, ice9, ice2])).toBe(81);
  expect(sweetestIcecream([ice2, ice6, ice3])).toBe(33);
  expect(sweetestIcecream([ice5, ice8, ice5])).toBe(34);
  expect(sweetestIcecream([ice3, ice10, ice1])).toBe(23);
  expect(sweetestIcecream([ice8, ice10, ice5])).toBe(34);
  expect(sweetestIcecream([ice3, ice7, ice10])).toBe(17);
  expect(sweetestIcecream([ice10, ice5, ice4])).toBe(18);
  expect(sweetestIcecream([ice8, ice3, ice4, ice5])).toBe(34);
  expect(sweetestIcecream([ice1, ice9, ice7, ice3])).toBe(81);
  expect(sweetestIcecream([ice1, ice3, ice3, ice6])).toBe(33);
  expect(sweetestIcecream([ice1, ice2, ice3, ice4, ice5])).toBe(23);
  expect(sweetestIcecream([ice6, ice7, ice5, ice4, ice3])).toBe(33);
  expect(sweetestIcecream([ice5, ice4, ice6, ice6, ice1])).toBe(33);
  expect(sweetestIcecream([ice2, ice10, ice6, ice9, ice7])).toBe(81);
  expect(sweetestIcecream([ice10, ice3, ice2, ice1, ice9])).toBe(81);
  expect(sweetestIcecream([ice10, ice7, ice5, ice2, ice9])).toBe(81);
  expect(sweetestIcecream([ice10, ice10, ice6, ice8, ice4])).toBe(34);
  expect(sweetestIcecream([ice10, ice9, ice2, ice4, ice10])).toBe(81);
  expect(sweetestIcecream([ice10, ice10, ice4, ice1, ice9])).toBe(81);
  expect(sweetestIcecream([ice7, ice8, ice4, ice4, ice5, ice1])).toBe(34);
  expect(sweetestIcecream([ice8, ice2, ice2, ice2, ice4, ice8])).toBe(34);
  expect(sweetestIcecream([ice9, ice2, ice4, ice8, ice3, ice3])).toBe(81);
  expect(sweetestIcecream([ice6, ice3, ice9, ice8, ice2, ice6])).toBe(81);
  expect(sweetestIcecream([ice7, ice5, ice3, ice8, ice1, ice9])).toBe(81);
  expect(sweetestIcecream([ice9, ice6, ice8, ice3, ice2, ice2])).toBe(81);
  expect(sweetestIcecream([ice10, ice8, ice6, ice7, ice9, ice4])).toBe(81);
  expect(sweetestIcecream([ice9, ice2, ice6, ice4, ice10, ice3])).toBe(81);
  expect(sweetestIcecream([ice10, ice10, ice9, ice4, ice7, ice9])).toBe(81);
  expect(sweetestIcecream([ice6, ice8, ice2, ice10, ice7, ice10])).toBe(34);
  expect(sweetestIcecream([ice5, ice1, ice7, ice6, ice8, ice1, ice8])).toBe(34);
  expect(sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6])).toBe(
    34,
  );
  expect(sweetestIcecream([ice1, ice9, ice10, ice9, ice7, ice1, ice9])).toBe(
    81,
  );
  expect(sweetestIcecream([ice3, ice4, ice7, ice3, ice7, ice10, ice2])).toBe(
    18,
  );
  expect(sweetestIcecream([ice8, ice10, ice1, ice7, ice8, ice9, ice1])).toBe(
    81,
  );
  expect(sweetestIcecream([ice4, ice2, ice3, ice9, ice5, ice10, ice6])).toBe(
    81,
  );
  expect(
    sweetestIcecream([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2]),
  ).toBe(33);
  expect(
    sweetestIcecream([ice1, ice8, ice6, ice7, ice3, ice2, ice3, ice7]),
  ).toBe(34);
  expect(
    sweetestIcecream([ice5, ice9, ice9, ice9, ice7, ice5, ice9, ice7]),
  ).toBe(81);
  expect(
    sweetestIcecream([ice4, ice9, ice4, ice3, ice3, ice2, ice5, ice2]),
  ).toBe(81);
  expect(
    sweetestIcecream([ice7, ice1, ice9, ice6, ice7, ice10, ice2, ice3]),
  ).toBe(81);
  expect(
    sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]),
  ).toBe(34);
  expect(
    sweetestIcecream([ice10, ice8, ice4, ice3, ice9, ice8, ice1, ice10]),
  ).toBe(81);
});
