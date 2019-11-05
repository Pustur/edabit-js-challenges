import owofied from './index';

test('owofied', () => {
  expect(owofied('Never gonna give you up')).toBe(
    'Nwevwer gonna gwivwe you up owo',
  );
  expect(owofied('Never gonna let you down')).toBe(
    'Nwevwer gonna lwet you down owo',
  );
  expect(owofied("Cause baby you're a firework")).toBe(
    "Causwe baby you'rwe a fwirwework owo",
  );
  expect(owofied('Shine bright like a diamond')).toBe(
    'Shwinwe brwight lwikwe a dwiamond owo',
  );
  expect(owofied("We've known each other for so long")).toBe(
    "Wwe'vwe known weach othwer for so long owo",
  );
  expect(owofied("I'm gonna ride 'til I can't no more")).toBe(
    "I'm gonna rwidwe 'twil I can't no morwe owo",
  );
  expect(owofied('Do you ever feel like a plastic bag')).toBe(
    'Do you wevwer fwewel lwikwe a plastwic bag owo',
  );
});
