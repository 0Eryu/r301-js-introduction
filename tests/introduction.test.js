import {
  add,
  addToAll,
  adultFilter,
  ageAverage,
  average,
  extractAge,
  isAdult,
  isChild,
  sub,
  sum,
} from "../src/introduction";

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

describe("average", () => {
  test("average of an empty array equals null", () => {
    expect(average([])).toBe(null);
  });
  test("average of -1, 2 and 5 equals 2", () => {
    expect(average([-1, 2, 5])).toBe(2);
  });
});

describe("user", () => {
  let child;
  let adult;
  beforeEach(() => {
    child = { age: 12 };
    adult = { age: 22 };
  });

  test("Child user is not an adult", () => {
    expect(isAdult(child)).toBe(false);
  });
  test("Child user is a child", () => {
    expect(isChild(child)).toBe(true);
  });
  test("Adult user is an adult", () => {
    expect(isAdult(adult)).toBe(true);
  });
  test("Adult user is not a child", () => {
    expect(isChild(adult)).toBe(false);
  });
});

describe("users", () => {
  let users;
  beforeEach(() => {
    users = [
      { age: 19, name: "Alice" },
      { age: 12, name: "Bob" },
      { age: 21, name: "Jim" },
      { age: 16, name: "John" },
      { age: 32, name: "Kelly" },
    ];
  });

  describe("extract age", () => {
    test("Extract users age in a new array", () => {
      expect(extractAge(users)).not.toBe(users);
    });
    test("Extract users age return an array of users' age", () => {
      expect(extractAge(users)).toEqual([19, 12, 21, 16, 32]);
    });
  });

  describe("adultFilter", () => {
    test("filter without type return all data array", () => {
      expect(adultFilter(users)).toEqual(users);
    });
    test('filter with "child" return child users', () => {
      expect(adultFilter(users, "child")).toEqual([
        { age: 12, name: "Bob" },
        { age: 16, name: "John" },
      ]);
    });
    test('filter with "adult" return adult users', () => {
      expect(adultFilter(users, "adult")).toEqual([
        { age: 19, name: "Alice" },
        { age: 21, name: "Jim" },
        { age: 32, name: "Kelly" },
      ]);
    });
  });

  describe("ageAverage", () => {
    test("age average off all users is 20", () => {
      expect(ageAverage(users)).toBe(20);
    });
    test("age average off all users is 14", () => {
      expect(ageAverage(users, "child")).toBe(14);
    });
    test("age average off all users is 24", () => {
      expect(ageAverage(users, "adult")).toBe(24);
    });
  });

});