const { sum, subtract, times, divide } = require("../modules/calcHelper");

describe("calculator ", () => {
  describe("Addition", () => {
    test("sum of 1 + 2 equals 3", () => {
      expect(sum(1, 2)).toBe(3);
    });
    test("sum of 1 + 2 should not be equals to 4", () => {
      expect(sum(1, 2)).not.toBe(4);
    });
    test("sum of 2 + 2 equals 4", () => {
      expect(sum(2, 2)).toBe(4);
    });
    test("sum of 2 + 5 equals 7", () => {
      expect(sum(2, 5)).toBe(7);
    });
  });
});
