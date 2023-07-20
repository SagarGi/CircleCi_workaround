const { sum, subtract, times, divide } = require("../modules/calcHelper");

describe("calculator ", () => {
  describe("Addition", () => {
    test("sum of 1 + 2 equlas 3", () => {
      expect(sum(1, 2)).toBe(3);
    });
    test("sum of 1 + 2 should not be equla to 4", () => {
      expect(sum(1, 2)).not.toBe(4);
    });
    test("sum of 2 + 2 equlas 4", () => {
      expect(sum(2, 2)).toBe(4);
    });
  });
});
