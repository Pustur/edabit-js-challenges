import polybius from './index';

test('polybius', () => {
  expect(polybius('Hi')).toBe('2324');
  expect(polybius('The lesson is: never try')).toBe(
    '442315 311543433433 2443 3315511542 444254',
  );
  expect(
    polybius("Just because I don't care doesn't mean that I don't understand"),
  ).toBe(
    '24454344 12151311454315 24 14343344 13114215 143415433344 32151133 44231144 24 14343344 45331415424344113314',
  );
  expect(
    polybius('543445 14343344 522433 21422415331443 52244423 4311311114'),
  ).toBe('you dont win friends with salad');
  expect(
    polybius(
      '24454344 12151311454315 24 14343344 13114215 143415433344 32151133 44231144 24 14343344 45331415424344113314',
    ),
  ).toBe('iust because i dont care doesnt mean that i dont understand');
  expect(
    polybius(
      '4323343531242144243322 2443 11 51241344243231154343 1342243215 31242515 3545331323243322 43343215343315 2433 442315 14114225',
    ),
  ).toBe('shoplifting is a victimless crime like punching someone in the dark');
});
