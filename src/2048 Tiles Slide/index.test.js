import leftSlide from './index';

test('leftSlide', () => {
  expect(leftSlide([2, 2, 2, 0])).toEqual([4, 2, 0, 0]);
  expect(leftSlide([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
  expect(leftSlide([0, 0, 0, 2])).toEqual([2, 0, 0, 0]);
  expect(leftSlide([2, 0, 0, 0])).toEqual([2, 0, 0, 0]);
  expect(leftSlide([8, 2, 2, 4])).toEqual([8, 4, 4, 0]);
  expect(leftSlide([0, 2, 0, 2, 4])).toEqual([4, 4, 0, 0, 0]);
  expect(leftSlide([2, 2, 4, 4, 8, 8])).toEqual([4, 8, 16, 0, 0, 0]);
  expect(leftSlide([0, 2, 2, 8, 8, 8])).toEqual([4, 16, 8, 0, 0, 0]);
  expect(
    leftSlide([1024, 1024, 1024, 512, 512, 256, 256, 128, 128, 64, 32, 32]),
  ).toEqual([2048, 1024, 1024, 512, 256, 64, 64, 0, 0, 0, 0, 0]);
});
