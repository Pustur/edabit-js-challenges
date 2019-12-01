import smithType from './index';

test('smithType', () => {
  expect(smithType(1)).toBe('Not a Smith');
  expect(smithType(6)).toBe('Not a Smith');
  expect(smithType(7)).toBe('Trivial Smith');
  expect(smithType(8)).toBe('Not a Smith');
  expect(smithType(22)).toBe('Single Smith');
  expect(smithType(58)).toBe('Single Smith');
  expect(smithType(666)).toBe('Single Smith');
  expect(smithType(728)).toBe('Youngest Smith');
  expect(smithType(729)).toBe('Oldest Smith');
  expect(smithType(2963)).toBe('Trivial Smith');
  expect(smithType(2964)).toBe('Youngest Smith');
  expect(smithType(2965)).toBe('Oldest Smith');
});
