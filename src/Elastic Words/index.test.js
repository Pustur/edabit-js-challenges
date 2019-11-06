import elasticize from './index';

test('elasticize', () => {
  expect(elasticize('X')).toBe('X');
  expect(elasticize('AA')).toBe('AA');
  expect(elasticize('BOB')).toBe('BOOB');
  expect(elasticize('ABC')).toBe('ABBC');
  expect(elasticize('ANNA')).toBe('ANNNNA');
  expect(elasticize('OTTO')).toBe('OTTTTO');
  expect(elasticize('KAYAK')).toBe('KAAYYYAAK');
  expect(elasticize('LEVEL')).toBe('LEEVVVEEL');
  expect(elasticize('IJKCBA')).toBe('IJJKKKCCCBBA');
  expect(elasticize('REDDER')).toBe('REEDDDDDDEER');
  expect(elasticize('ROTATOR')).toBe('ROOTTTAAAATTTOOR');
});
