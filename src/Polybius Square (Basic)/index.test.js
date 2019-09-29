import polybius from './index';

test('Polybius Square (Basic)', t => {
  // Encrypt
  t.is(polybius('Hi'), '2324');
  t.is(
    polybius('The lesson is: never try'),
    '442315 311543433433 2443 3315511542 444254',
  );
  t.is(
    polybius("Just because I don't care doesn't mean that I don't understand"),
    '24454344 12151311454315 24 14343344 13114215 143415433344 32151133 44231144 24 14343344 45331415424344113314',
    'Disregard punctuation, but keep spaces',
  );

  // Decrypt
  t.is(
    polybius('543445 14343344 522433 21422415331443 52244423 4311311114'),
    'you dont win friends with salad',
  );
  t.is(
    polybius(
      '24454344 12151311454315 24 14343344 13114215 143415433344 32151133 44231144 24 14343344 45331415424344113314',
    ),
    'iust because i dont care doesnt mean that i dont understand',
  );
  t.is(
    polybius(
      '4323343531242144243322 2443 11 51241344243231154343 1342243215 31242515 3545331323243322 43343215343315 2433 442315 14114225',
    ),
    'shoplifting is a victimless crime like punching someone in the dark',
  );
});
