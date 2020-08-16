import stair from './index';

test('stair', () => {
  expect(stair(0)).toBe('___');
  expect(stair(1)).toBe('  _\n_|');
  expect(stair(2)).toBe('    _\n  _|\n_|');
  expect(stair(3)).toBe('      _\n    _|\n  _|\n_|');
  expect(stair(5)).toBe('          _\n        _|\n      _|\n    _|\n  _|\n_|');
  expect(stair(10)).toBe(
    '                    _\n                  _|\n                _|\n              _|\n            _|\n          _|\n        _|\n      _|\n    _|\n  _|\n_|',
  );
  expect(stair(50)).toBe(
    '                                                                                                    _\n                                                                                                  _|\n                                                                                                _|\n                                                                                              _|\n                                                                                            _|\n                                                                                          _|\n                                                                                        _|\n                                                                                      _|\n                                                                                    _|\n                                                                                  _|\n                                                                                _|\n                                                                              _|\n                                                                            _|\n                                                                          _|\n                                                                        _|\n                                                                      _|\n                                                                    _|\n                                                                  _|\n                                                                _|\n                                                              _|\n                                                            _|\n                                                          _|\n                                                        _|\n                                                      _|\n                                                    _|\n                                                  _|\n                                                _|\n                                              _|\n                                            _|\n                                          _|\n                                        _|\n                                      _|\n                                    _|\n                                  _|\n                                _|\n                              _|\n                            _|\n                          _|\n                        _|\n                      _|\n                    _|\n                  _|\n                _|\n              _|\n            _|\n          _|\n        _|\n      _|\n    _|\n  _|\n_|',
  );
});
