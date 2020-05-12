import palindromicDate from './index';

test('palindromicDate', () => {
  expect(palindromicDate('02/02/2020')).toBe(true);
  expect(palindromicDate('12/12/2121')).toBe(true);
  expect(palindromicDate('09/09/9090')).toBe(true);
  expect(palindromicDate('07/07/7070')).toBe(true);
  expect(palindromicDate('01/01/1010')).toBe(true);
  expect(palindromicDate('11/12/2019')).toBe(false);
  expect(palindromicDate('11/02/2011')).toBe(false);
  expect(palindromicDate('06/10/1469')).toBe(false);
  expect(palindromicDate('06/05/3133')).toBe(false);
  expect(palindromicDate('11/04/2203')).toBe(false);
  expect(palindromicDate('06/11/2923')).toBe(false);
  expect(palindromicDate('03/08/8030')).toBe(false);
  expect(palindromicDate('03/11/3369')).toBe(false);
  expect(palindromicDate('11/03/2775')).toBe(false);
  expect(palindromicDate('03/03/1822')).toBe(false);
});
