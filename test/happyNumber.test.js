function happyNumber(n) {
  let seen = {};
  while (n !== 1) {
    seen[n] = n;
    n = n
      .toString()
      .split("")
      .reduce((acc, cv) => acc + parseInt(cv) ** 2, 0);
    if (seen[n]) {
      return false;
    }
  }
  return true;
}

function happyNumberV2(n) {
  let seen = {};
  while (n !== 1) {
    seen[n] = n;
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; i++) {
      n += parseInt(s[i]) ** 2;
    }
    if (seen[n]) {
      return false;
    }
  }
  return true;
}

describe("FALSE A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return true if n is a happy number, and false if not.", () => {
  it(`happy number 2 false`, () => {
    expect(happyNumber(2)).toBeFalsy();
  });

  it(`happy number 3 false`, () => {
    expect(happyNumber(3)).toBeFalsy();
  });

  it(`happy number 4 false`, () => {
    expect(happyNumber(4)).toBeFalsy();
  });

  it(`happy number 5 false`, () => {
    expect(happyNumber(5)).toBeFalsy();
  });

  it(`happy number 19 true`, () => {
    expect(happyNumber(19)).toBeTruthy();
  });

  it(`happy number 100 true`, () => {
    expect(happyNumber(100)).toBeTruthy();
  });

  it(`happy number 68 true`, () => {
    expect(happyNumber(68)).toBeTruthy();
  });
});

describe("TRUE A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return true if n is a happy number, and false if not.", () => {
  it(`happy number 2 false`, () => {
    expect(happyNumberV2(2)).toBeFalsy();
  });

  it(`happy number 3 false`, () => {
    expect(happyNumberV2(3)).toBeFalsy();
  });

  it(`happy number 4 false`, () => {
    expect(happyNumberV2(4)).toBeFalsy();
  });

  it(`happy number 5 false`, () => {
    expect(happyNumberV2(5)).toBeFalsy();
  });

  it(`happy number 19 true`, () => {
    expect(happyNumberV2(19)).toBeTruthy();
  });

  it(`happy number 100 true`, () => {
    expect(happyNumberV2(100)).toBeTruthy();
  });

  it(`happy number 68 true`, () => {
    expect(happyNumberV2(68)).toBeTruthy();
  });
});
