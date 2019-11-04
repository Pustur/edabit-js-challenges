import createTest from './index';

test('createTest', () => {
  expect(createTest(1, 1)).toBe('Test.assertEquals(createTest(1, 1), 2)');
  expect(createTest(0, 0)).toBe('Test.assertEquals(createTest(0, 0), 0)');
  expect(createTest(99, 1)).toBe('Test.assertEquals(createTest(99, 1), 100)');
  expect(createTest('a', 'b')).toBe(
    'Test.assertEquals(createTest("a", "b"), "ab")',
  );
  expect(createTest('1', '1')).toBe(
    'Test.assertEquals(createTest("1", "1"), "11")',
  );
  expect(createTest([1], [1])).toBe(
    'Test.assertSimilar(createTest([1], [1]), [1, 1])',
  );
  expect(createTest('Te', 'st')).toBe(
    'Test.assertEquals(createTest("Te", "st"), "Test")',
  );
  expect(createTest(['1'], ['1'])).toBe(
    'Test.assertSimilar(createTest(["1"], ["1"]), ["1", "1"])',
  );
  expect(createTest(['String'], ['String'])).toBe(
    'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])',
  );
});
