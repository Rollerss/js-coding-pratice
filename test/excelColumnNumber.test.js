function excelColumnNumber(columnTitle) {
  let colNum = 0;
  const colLen = columnTitle.length - 1;
  const colUpCase = columnTitle.toUpperCase();
  for (let i = 0; i <= colLen; i++) {
    colNum += (colUpCase.charCodeAt(i) - 64) * 26 ** (colLen - i);
  }
  return colNum;
}

function excelColumnNumberV2(columnTitle) {
  let colNum = 0;
  const colLen = columnTitle.length - 1;
  const colUpCase = columnTitle.toUpperCase();
  for (let i = 0; i <= colLen; i++) {
    let n = colUpCase.charCodeAt(i) - 64;
    const c = colLen - i;
    n *= 26 ** c;
    colNum += n;
  }
  return colNum;
}

function excelColumnNumberV1(columnTitle) {
  let colNum = 0;
  const colLen = columnTitle.length - 1;
  const colUpCase = columnTitle.toUpperCase();
  for (let i = 0; i <= colLen; i++) {
    let n = colUpCase.charCodeAt(i) - 64;
    const c = colLen - i;
    if (c > 0) {
      n *= 26 ** c;
    }
    colNum += n;
  }
  return colNum;
}

function excelColumnNumberReduce(columnTitle) {
  return columnTitle
    .split("")
    .reduce(
      (acc, cv, i, arr) =>
        acc + (cv.charCodeAt(0) - 64) * 26 ** (arr.length - 1 - i),
      0
    );
}

describe("Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.", () => {
  it(`column A to 1`, () => {
    expect(excelColumnNumber("A")).toEqual(1);
  });

  it(`column M to 13`, () => {
    expect(excelColumnNumber("M")).toEqual(13);
  });

  it(`column Z to 26`, () => {
    expect(excelColumnNumber("Z")).toEqual(26);
  });

  it(`column AA to 27`, () => {
    expect(excelColumnNumber("AA")).toEqual(27);
  });

  it(`column ZY to 701`, () => {
    expect(excelColumnNumber("ZY")).toEqual(701);
  });

  it(`column ZZ to 702`, () => {
    expect(excelColumnNumber("ZZ")).toEqual(702);
  });

  it(`column AAA to 703`, () => {
    expect(excelColumnNumber("AAA")).toEqual(703);
  });

  it(`column FXSHRXW to 2147483647`, () => {
    expect(excelColumnNumber("FXSHRXW")).toEqual(2147483647);
  });
});

describe("Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.", () => {
  it(`column A to 1`, () => {
    expect(excelColumnNumberV1("A")).toEqual(1);
  });

  it(`column M to 13`, () => {
    expect(excelColumnNumberV1("M")).toEqual(13);
  });

  it(`column Z to 26`, () => {
    expect(excelColumnNumberV1("Z")).toEqual(26);
  });

  it(`column AA to 27`, () => {
    expect(excelColumnNumberV1("AA")).toEqual(27);
  });

  it(`column ZY to 701`, () => {
    expect(excelColumnNumberV1("ZY")).toEqual(701);
  });

  it(`column ZZ to 702`, () => {
    expect(excelColumnNumberV1("ZZ")).toEqual(702);
  });

  it(`column AAA to 703`, () => {
    expect(excelColumnNumberV1("AAA")).toEqual(703);
  });

  it(`column FXSHRXW to 2147483647`, () => {
    expect(excelColumnNumberV1("FXSHRXW")).toEqual(2147483647);
  });
});

describe("Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.", () => {
  it(`column A to 1`, () => {
    expect(excelColumnNumberV2("A")).toEqual(1);
  });

  it(`column M to 13`, () => {
    expect(excelColumnNumberV2("M")).toEqual(13);
  });

  it(`column Z to 26`, () => {
    expect(excelColumnNumberV2("Z")).toEqual(26);
  });

  it(`column AA to 27`, () => {
    expect(excelColumnNumberV2("AA")).toEqual(27);
  });

  it(`column ZY to 701`, () => {
    expect(excelColumnNumberV2("ZY")).toEqual(701);
  });

  it(`column ZZ to 702`, () => {
    expect(excelColumnNumberV2("ZZ")).toEqual(702);
  });

  it(`column AAA to 703`, () => {
    expect(excelColumnNumberV2("AAA")).toEqual(703);
  });

  it(`column FXSHRXW to 2147483647`, () => {
    expect(excelColumnNumberV2("FXSHRXW")).toEqual(2147483647);
  });
});

describe("Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.", () => {
  it(`column A to 1`, () => {
    expect(excelColumnNumberReduce("A")).toEqual(1);
  });

  it(`column M to 13`, () => {
    expect(excelColumnNumberReduce("M")).toEqual(13);
  });

  it(`column Z to 26`, () => {
    expect(excelColumnNumberReduce("Z")).toEqual(26);
  });

  it(`column AA to 27`, () => {
    expect(excelColumnNumberReduce("AA")).toEqual(27);
  });

  it(`column ZY to 701`, () => {
    expect(excelColumnNumberReduce("ZY")).toEqual(701);
  });

  it(`column ZZ to 702`, () => {
    expect(excelColumnNumberReduce("ZZ")).toEqual(702);
  });

  it(`column AAA to 703`, () => {
    expect(excelColumnNumberReduce("AAA")).toEqual(703);
  });

  it(`column FXSHRXW to 2147483647`, () => {
    expect(excelColumnNumberReduce("FXSHRXW")).toEqual(2147483647);
  });
});
