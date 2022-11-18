import { add, addToAll, sub, sum } from "../src/introduction";

test("add 1 to 2 equals 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("sub 1 to 2 equals 1", () => {
  expect(sub(1, 2)).toBe(1);
});

describe("sum", () => {
  test("sum of 1, 2 and 3 equals 6", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  test("sum of an empty array equals 0", () => {
    expect(sum([])).toBe(0);
  });
});

describe("addToAll", () => {
  test("add 2 to all : 1, 2 and 3 equals 3, 4, 5", () => {
    expect(addToAll([1, 2, 3], 2)).toEqual([3, 4, 5]);
  });
  test("return a new array", () => {
    const values = [1, 2];
    expect(addToAll(values)).not.toBe(values);
  });
});