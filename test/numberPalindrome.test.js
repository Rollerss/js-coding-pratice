function numberPalindrome(num) {
  const str = num.toString();
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

describe("An integer is a palindrome when it reads the same backward as forward", () => {
  const isNotPal = [123, -121, 1213, 123421];
  const isPal = [121, 1221, 12321];

  it(`${isNotPal[0]} is not a palindrome`, () => {
    expect(numberPalindrome(isNotPal[0])).toBeFalsy();
  });

  it(`${isNotPal[1]} is not a palindrome`, () => {
    expect(numberPalindrome(isNotPal[1])).toBeFalsy();
  });

  it(`${isNotPal[2]} is not a palindrome`, () => {
    expect(numberPalindrome(isNotPal[2])).toBeFalsy();
  });

  it(`${isNotPal[3]} is not a palindrome`, () => {
    expect(numberPalindrome(isNotPal[3])).toBeFalsy();
  });

  it(`${isPal[0]} is palindrome`, () => {
    expect(numberPalindrome(isPal[0])).toBeTruthy();
  });

  it(`${isPal[1]} is palindrome`, () => {
    expect(numberPalindrome(isPal[1])).toBeTruthy();
  });

  it(`${isPal[2]} is palindrome`, () => {
    expect(numberPalindrome(isPal[2])).toBeTruthy();
  });
});
