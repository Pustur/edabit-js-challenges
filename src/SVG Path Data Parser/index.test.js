import pathDataParser from './index';

// prettier-ignore
test('pathDataParser', () => {
  const actual1 = pathDataParser('');
  const expected1 = [];

  const actual2 = pathDataParser('M 1 1.5 L 0 1.5 0 0.5 1 0.5 0.5 0 0 0.5 1 1.5 1 0.5 0 1.5');
  const expected2 = [
    { command: 'M', parameters: [1, 1.5] },
    { command: 'L', parameters: [0, 1.5, 0, 0.5, 1, 0.5, 0.5, 0, 0, 0.5, 1, 1.5, 1, 0.5, 0, 1.5] },
  ];

  const actual3 = pathDataParser('M 0,1 l 1,0 0,-1, 1,0 0,1 1,0 c -1,0 0,2 -1.5,2 c -1.5,0 -0.5,-2 -1.5,-2 z');
  const expected3 = [
    { command: 'M', parameters: [0, 1] },
    { command: 'l', parameters: [1, 0, 0, -1, 1, 0, 0, 1, 1, 0] },
    { command: 'c', parameters: [-1, 0, 0, 2, -1.5, 2] },
    { command: 'c', parameters: [-1.5, 0, -0.5, -2, -1.5, -2] },
    { command: 'z', parameters: [] },
  ];

  const actual4 = pathDataParser('M 0,1 h 1 v -1 h 1 v 1 h 1 C 2,1 3,3 1.5,3 C 0,3 1,1 0,1 z');
  const expected4 = [
    { command: 'M', parameters: [0, 1] },
    { command: 'h', parameters: [1] },
    { command: 'v', parameters: [-1] },
    { command: 'h', parameters: [1] },
    { command: 'v', parameters: [1] },
    { command: 'h', parameters: [1] },
    { command: 'C', parameters: [2, 1, 3, 3, 1.5, 3] },
    { command: 'C', parameters: [0, 3, 1, 1, 0, 1] },
    { command: 'z', parameters: [] },
  ];

  const actual5 = pathDataParser('M 0,1 h 1 v -1 h 1 v 1 h 1 c -1,0 0,2 -1.5,2 c -1.5,0 -0.5,-2 -1.5,-2 z');
  const expected5 = [
    { command: 'M', parameters: [0, 1] },
    { command: 'h', parameters: [1] },
    { command: 'v', parameters: [-1] },
    { command: 'h', parameters: [1] },
    { command: 'v', parameters: [1] },
    { command: 'h', parameters: [1] },
    { command: 'c', parameters: [-1, 0, 0, 2, -1.5, 2] },
    { command: 'c', parameters: [-1.5, 0, -0.5, -2, -1.5, -2] },
    { command: 'z', parameters: [] },
  ];

  const actual6 = pathDataParser('M 0,1 l 1,0 0,-1, 1,0 0,1 1,0 c -1,0 0,2 -1.5,2 c -1.5,0 -0.5,-2 -1.5,-2 z M 0,0 l 0.5,0.5 -0.5,0 z M 3,0 l -0.5,0.5 0.5,0 z');
  const expected6 = [
    { command: 'M', parameters: [0, 1] },
    { command: 'l', parameters: [1, 0, 0, -1, 1, 0, 0, 1, 1, 0] },
    { command: 'c', parameters: [-1, 0, 0, 2, -1.5, 2] },
    { command: 'c', parameters: [-1.5, 0, -0.5, -2, -1.5, -2] },
    { command: 'z', parameters: [] },
    { command: 'M', parameters: [0, 0] },
    { command: 'l', parameters: [0.5, 0.5, -0.5, 0] },
    { command: 'z', parameters: [] },
    { command: 'M', parameters: [3, 0] },
    { command: 'l', parameters: [-0.5, 0.5, 0.5, 0] },
    { command: 'z', parameters: [] },
  ];

  const actual7 = pathDataParser('M 38.2 22.6\nc -.667 -3.6 -1.85 -6.333 -3.55 -8.2 -1.7 -1.867 -4.283 -2.8 -7.75 -2.8 -2.267 0 -4.15 .383 -5.65 1.15 -1.5 .767 -2.7 1.717 -3.6 2.85 -.9 1.133 -1.533 2.333 -1.9 3.6\ns -.583 2.4 -.65 3.4\nh 23.1\nz\nm -23.1 9\nc .2 4.6 1.367 7.933 3.5 10\ns 5.2 3.1 9.2 3.1\nc 2.867 0 5.333 -.717 7.4 -2.15 2.067 -1.433 3.333 -2.95 3.8 -4.55\nh 12.5\nc -2 6.2 -5.067 10.633 -9.2 13.3 -4.133 2.667 -9.133 4 -15 4 -4.067 0 -7.733 -.65 -11 -1.95 -3.267 -1.3 -6.033 -3.15 -8.3 -5.55 -2.267 -2.4 -4.017 -5.267 -5.25 -8.6 -1.233 -3.333 -1.85 -7 -1.85 -11 0 -3.867 .633 -7.467 1.9 -10.8 1.267 -3.333 3.067 -6.217 5.4 -8.65\nC 10.533 6.317 13.317 4.4 16.55 3 19.783 1.6 23.367 .9 27.3 .9\nc 4.4 0 8.233 .85 11.5 2.55 3.267 1.7 5.95 3.983 8.05 6.85 2.1 2.867 3.617 6.133 4.55 9.8 .933 3.667 1.267 7.5 1 11.5\nH 15.1\nz');
  const expected7 = [
    { command: 'M', parameters: [38.2, 22.6] },
    { command: 'c', parameters: [-0.667, -3.6, -1.85, -6.333, -3.55, -8.2, -1.7, -1.867, -4.283, -2.8, -7.75, -2.8, -2.267, 0, -4.15, 0.383, -5.65, 1.15, -1.5, 0.767, -2.7, 1.717, -3.6, 2.85, -0.9, 1.133, -1.533, 2.333, -1.9, 3.6] },
    { command: 's', parameters: [-0.583, 2.4, -0.65, 3.4] },
    { command: 'h', parameters: [23.1] },
    { command: 'z', parameters: [] },
    { command: 'm', parameters: [-23.1, 9] },
    { command: 'c', parameters: [0.2, 4.6, 1.367, 7.933, 3.5, 10] },
    { command: 's', parameters: [5.2, 3.1, 9.2, 3.1] },
    { command: 'c', parameters: [2.867, 0, 5.333, -0.717, 7.4, -2.15, 2.067, -1.433, 3.333, -2.95, 3.8, -4.55] },
    { command: 'h', parameters: [12.5] },
    { command: 'c', parameters: [-2, 6.2, -5.067, 10.633, -9.2, 13.3, -4.133, 2.667, -9.133, 4, -15, 4, -4.067, 0, -7.733, -0.65, -11, -1.95, -3.267, -1.3, -6.033, -3.15, -8.3, -5.55, -2.267, -2.4, -4.017, -5.267, -5.25, -8.6, -1.233, -3.333, -1.85, -7, -1.85, -11, 0, -3.867, 0.633, -7.467, 1.9, -10.8, 1.267, -3.333, 3.067, -6.217, 5.4, -8.65] },
    { command: 'C', parameters: [10.533, 6.317, 13.317, 4.4, 16.55, 3, 19.783, 1.6, 23.367, 0.9, 27.3, 0.9] },
    { command: 'c', parameters: [4.4, 0, 8.233, 0.85, 11.5, 2.55, 3.267, 1.7, 5.95, 3.983, 8.05, 6.85, 2.1, 2.867, 3.617, 6.133, 4.55, 9.8, 0.933, 3.667, 1.267, 7.5, 1, 11.5] },
    { command: 'H', parameters: [15.1] },
    { command: 'z', parameters: [] },
  ];

  const actual8 = pathDataParser('M23.4 16.3\nh10.4\nv9.5\nH23.4\nv25.6\nc0 2.4.4 4 1.2 4.8.8.8 2.4 1.2 4.8 1.2.8 0 1.567-.033 2.3-.1\na19.893 19.893 0 0 0 2.1-.3\nv11\nc-1.2.2-2.533.333-4 .4\ns-2.9.1-4.3.1\nc-2.2 0-4.283-.15-6.25-.45-1.967-.3-3.7-.883-5.2-1.75\ns-2.683-2.1-3.55-3.7-1.3-3.7-1.3-6.3\nV25.8\nH.6\nv-9.5\nh8.6\nV.8\nh14.2\nv15.5\nz');
  const expected8 = [
    { command: 'M', parameters: [23.4, 16.3] },
    { command: 'h', parameters: [10.4] },
    { command: 'v', parameters: [9.5] },
    { command: 'H', parameters: [23.4] },
    { command: 'v', parameters: [25.6] },
    { command: 'c', parameters: [0, 2.4, 0.4, 4, 1.2, 4.8, 0.8, 0.8, 2.4, 1.2, 4.8, 1.2, 0.8, 0, 1.567, -0.033, 2.3, -0.1] },
    { command: 'a', parameters: [19.893, 19.893, 0, 0, 0, 2.1, -0.3] },
    { command: 'v', parameters: [11] },
    { command: 'c', parameters: [-1.2, 0.2, -2.533, 0.333, -4, 0.4] },
    { command: 's', parameters: [-2.9, 0.1, -4.3, 0.1] },
    { command: 'c', parameters: [-2.2, 0, -4.283, -0.15, -6.25, -0.45, -1.967, -0.3, -3.7, -0.883, -5.2, -1.75] },
    { command: 's', parameters: [-2.683, -2.1, -3.55, -3.7, -1.3, -3.7, -1.3, -6.3] },
    { command: 'V', parameters: [25.8] },
    { command: 'H', parameters: [0.6] },
    { command: 'v', parameters: [-9.5] },
    { command: 'h', parameters: [8.6] },
    { command: 'V', parameters: [0.8] },
    { command: 'h', parameters: [14.2] },
    { command: 'v', parameters: [15.5] },
    { command: 'z', parameters: [] },
  ];

  const actual9 = pathDataParser('M1 0H0v1h.6H0v1h1.5V0c1 0 1 2 0 2h1L3 0l.25 1h-.5.5l.25 1H4V0c.7 0 .7 1 0 1 1 0 1 1 0 1h1.3V0v2h1V0h-.5 1');
  const expected9 = [
    { command: 'M', parameters: [1, 0] },
    { command: 'H', parameters: [0] },
    { command: 'v', parameters: [1] },
    { command: 'h', parameters: [0.6] },
    { command: 'H', parameters: [0] },
    { command: 'v', parameters: [1] },
    { command: 'h', parameters: [1.5] },
    { command: 'V', parameters: [0] },
    { command: 'c', parameters: [1, 0, 1, 2, 0, 2] },
    { command: 'h', parameters: [1] },
    { command: 'L', parameters: [3, 0] },
    { command: 'l', parameters: [0.25, 1] },
    { command: 'h', parameters: [-0.5, 0.5] },
    { command: 'l', parameters: [0.25, 1] },
    { command: 'H', parameters: [4] },
    { command: 'V', parameters: [0] },
    { command: 'c', parameters: [0.7, 0, 0.7, 1, 0, 1, 1, 0, 1, 1, 0, 1] },
    { command: 'h', parameters: [1.3] },
    { command: 'V', parameters: [0] },
    { command: 'v', parameters: [2] },
    { command: 'h', parameters: [1] },
    { command: 'V', parameters: [0] },
    { command: 'h', parameters: [-0.5, 1] },
  ];

  expect(actual1).toEqual(expected1);
  expect(actual2).toEqual(expected2);
  expect(actual3).toEqual(expected3);
  expect(actual4).toEqual(expected4);
  expect(actual5).toEqual(expected5);
  expect(actual6).toEqual(expected6);
  expect(actual7).toEqual(expected7);
  expect(actual8).toEqual(expected8);
  expect(actual9).toEqual(expected9);
});
