import neutralise from './index';

test('neutralise', () => {
  expect(neutralise('-+', '++')).toBe('0+');
  expect(neutralise('--', '-+')).toBe('-0');
  expect(neutralise('-++', '+--')).toBe('000');
  expect(neutralise('+-+', '-++')).toBe('00+');
  expect(neutralise('-++', '-+-')).toBe('-+0');
  expect(neutralise('+--', '+--')).toBe('+--');
  expect(neutralise('-++-', '-+-+')).toBe('-+00');
  expect(neutralise('--++', '++++')).toBe('00++');
  expect(neutralise('---+', '-+++')).toBe('-00+');
  expect(neutralise('-----', '-----')).toBe('-----');
  expect(neutralise('--++--', '++--++')).toBe('000000');
  expect(neutralise('-+-+-+', '-+-+-+')).toBe('-+-+-+');
  expect(neutralise('+-----+-', '---++-++')).toBe('0--00-+0');
  expect(neutralise('--+++-+-', '+++++---')).toBe('00+++-0-');
  expect(neutralise('+++--+---', '++----++-')).toBe('++0--000-');
  expect(neutralise('-++-+-++-', '+-++++---')).toBe('00+0+000-');
  expect(neutralise('---++-+--', '-+++--++-')).toBe('-00+0-+0-');
  expect(neutralise('++-++--++-', '-+++-++-++')).toBe('0+0+0000+0');
  expect(neutralise('+-----+++-', '--+-+-++--')).toBe('0-0-0-++0-');
  expect(neutralise('-+--+-+---', '-+--+-+-+-')).toBe('-+--+-+-0-');
});
