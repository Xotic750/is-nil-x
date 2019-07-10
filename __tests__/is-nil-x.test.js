import isNil from 'src/is-nil-x';

describe('isNil', function() {
  it('should return true for `undefined` or `null`', function() {
    expect.assertions(3);
    expect(isNil()).toBe(true);
    expect(isNil(undefined)).toBe(true);
    expect(isNil(null)).toBe(true);
  });

  it('should return false for anything else', function() {
    expect.assertions(5);
    expect(isNil(true)).toBe(false);
    expect(isNil(1)).toBe(false);
    expect(isNil('')).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
  });
});
