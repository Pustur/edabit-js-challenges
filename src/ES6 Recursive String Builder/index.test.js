import getStringBuilder from './index';

test('getStringBuilder', () => {
  expect(getStringBuilder().Hello.there()).toBe('Hello there');
  expect(getStringBuilder().one.two.three.four()).toBe('one two three four');
  expect(getStringBuilder().we.live.in.a.society()).toBe(
    'we live in a society',
  );
  expect(getStringBuilder().hello.how.are.you.today()).toBe(
    'hello how are you today',
  );
  expect(getStringBuilder().today.is.the.greatest.day.I.have.ever.known()).toBe(
    'today is the greatest day I have ever known',
  );
  expect(
    getStringBuilder().there.are.only.two.hard.things.in.Computer.Science.cache.invalidation.and.naming.things(),
  ).toBe(
    'there are only two hard things in Computer Science cache invalidation and naming things',
  );
});
