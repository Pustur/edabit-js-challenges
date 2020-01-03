import rearrangedDifference from './index';

test('rearrangedDifference', () => {
  expect(rearrangedDifference(9092564)).toBe(9719721);
  expect(rearrangedDifference(1308821)).toBe(8719722);
  expect(rearrangedDifference(8386568)).toBe(5319765);
  expect(rearrangedDifference(7794084)).toBe(9429651);
  expect(rearrangedDifference(6366093)).toBe(9329661);
  expect(rearrangedDifference(7863060)).toBe(8729622);
  expect(rearrangedDifference(3368327)).toBe(6429654);
  expect(rearrangedDifference(7218787)).toBe(7599933);
  expect(rearrangedDifference(7723188)).toBe(7639533);
  expect(rearrangedDifference(8816317)).toBe(7739523);
  expect(rearrangedDifference(8824349)).toBe(7539543);
  expect(rearrangedDifference(3320707)).toBe(7709823);
  expect(rearrangedDifference(1695488)).toBe(8429652);
  expect(rearrangedDifference(2120034)).toBe(4309866);
  expect(rearrangedDifference(5300586)).toBe(8619732);
  expect(rearrangedDifference(3538814)).toBe(7519743);
  expect(rearrangedDifference(1336939)).toBe(8629632);
  expect(rearrangedDifference(6290200)).toBe(9619731);
  expect(rearrangedDifference(5268866)).toBe(6299964);
  expect(rearrangedDifference(5155458)).toBe(7099983);
});
