import alternatingCaps from './index';

test('alternatingCaps', () => {
  expect(alternatingCaps('alternating caps')).toBe('AlTeRnAtInG cApS');
  expect(alternatingCaps('What is your name?')).toBe('WhAt Is YoUr NaMe?');
  expect(alternatingCaps('OMG this website is awesome!')).toBe(
    'OmG tHiS wEbSiTe Is AwEsOmE!',
  );
  expect(alternatingCaps('The quick brown fox jumps over the lazy dog')).toBe(
    'ThE qUiCk BrOwN fOx JuMpS oVeR tHe LaZy DoG',
  );
  expect(
    alternatingCaps('Lorem ipsum dolor sit amet consectetur adipisicing elit.'),
  ).toBe('LoReM iPsUm DoLoR sIt AmEt CoNsEcTeTuR aDiPiSiCiNg ElIt.');
  expect(
    alternatingCaps(
      'The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.',
    ),
  ).toBe(
    'ThE iNtEnT iS tO pRoViDe PlAyErS wItH a SeNsE oF pRiDe AnD aCcOmPlIsHmEnT fOr UnLoCkInG dIfFeReNt HeRoEs.',
  );
});
