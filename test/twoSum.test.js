function twoSum(arr, target) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSumMap(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let num = target - arr[i];
    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(arr[i], i);
  }
  return [];
}

function twoSumObj(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let num = target - arr[i];
    if (map[num] !== undefined) {
      return [map[num], i];
    }
    map[arr[i]] = i;
  }
  return [];
}

describe("returns the indices of two values in the array that sum to the target", () => {
  it("should return indices", () => {
    expect(twoSum([1, 2], 3)).toEqual(expect.arrayContaining([1, 0]));
    expect(twoSum([2, 3, 1, 5], 7)).toEqual(expect.arrayContaining([0, 3]));
  });

  it("should one of the possible answers", () => {
    const answers = [
      [0, 3],
      [3, 0],
      [1, 2],
      [2, 1],
    ];
    expect(answers).toContainEqual(
      expect.arrayContaining(twoSum([2, 3, 4, 5], 7))
    );
  });

  it("should return empty array when no sum found", () => {
    expect(twoSum([1, 2], 4)).toEqual([]);
    expect(twoSum([], 0)).toEqual([]);
    expect(twoSum([1], 0)).toEqual([]);
  });
});

describe("returns the indices of two values in the array that sum to the target with a Map", () => {
  it("should return indices", () => {
    expect(twoSumMap([1, 2], 3)).toEqual(expect.arrayContaining([0, 1]));
  });

  it("should one of the possible answers", () => {
    const answers = [
      [0, 3],
      [3, 0],
      [1, 2],
      [2, 1],
    ];
    expect(answers).toContainEqual(
      expect.arrayContaining(twoSumMap([2, 3, 4, 5], 7))
    );
  });

  it("should return empty array when no sum found", () => {
    expect(twoSumMap([1, 2], 4)).toEqual([]);
    expect(twoSumMap([], 0)).toEqual([]);
    expect(twoSumMap([1], 0)).toEqual([]);
  });
});

describe("returns the indices of two values in the array that sum to the target with a Object", () => {
  it("should return indices", () => {
    expect(twoSumObj([1, 2], 3)).toEqual(expect.arrayContaining([0, 1]));
  });

  it("should one of the possible answers", () => {
    const answers = [
      [0, 3],
      [3, 0],
      [1, 2],
      [2, 1],
    ];
    expect(answers).toContainEqual(
      expect.arrayContaining(twoSumObj([2, 3, 4, 5], 7))
    );
  });

  it("should return empty array when no sum found", () => {
    expect(twoSumObj([1, 2], 4)).toEqual([]);
    expect(twoSumObj([], 0)).toEqual([]);
    expect(twoSumObj([1], 0)).toEqual([]);
  });
});
