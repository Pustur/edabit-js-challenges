import youtubeId from './index';

test('youtubeId', () => {
  expect(youtubeId('https://youtu.be/BCDEDi5gDPo')).toBe('BCDEDi5gDPo');
  expect(youtubeId('https://www.youtube.com/watch?v=XPEr1cArWRg')).toBe(
    'XPEr1cArWRg',
  );
  expect(youtubeId('https://youtube.com/watch?t=4m40s&v=vxP3bY-XxY4')).toBe(
    'vxP3bY-XxY4',
  );
  expect(youtubeId('http://www.youtube.com/watch?v=-SNQGyVW_YI&t=8871')).toBe(
    '-SNQGyVW_YI',
  );
  expect(youtubeId('https://www.youtube-nocookie.com/embed/2w9SQjdn9U4')).toBe(
    '2w9SQjdn9U4',
  );
  expect(
    youtubeId(
      'https://www.youtube.com/watch?feature=youtu.be&v=jOxnoDi9IYg&t=3311s',
    ),
  ).toBe('jOxnoDi9IYg');
  expect(
    youtubeId(
      'www.youtube.com/watch?list=PL3QZUm48uWnsdFakp3A2fI-NzmfH1jyQe&v=yv56ncTdTmU&index=8',
    ),
  ).toBe('yv56ncTdTmU');
});
