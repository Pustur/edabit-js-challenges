import percentFilled from './index';

test('percentFilled', () => {
  expect(percentFilled(['###', '#o#', '###'])).toBe('100%');
  expect(percentFilled(['####', '#  #', '####'])).toBe('0%');
  expect(percentFilled(['####', '#  #', '#o #', '####'])).toBe('25%');
  expect(percentFilled(['#######', '#o oo #', '#######'])).toBe('60%');
  expect(
    percentFilled(['######', '#ooo #', '#oo  #', '#    #', '#    #', '######']),
  ).toBe('31%');
});
