const caesarCipher = require("./caesarCipher");

test("small positive shift", () => {
  expect(caesarCipher("Aa Oo Zz", 5)).toBe("Ff Tt Ee");
});
test("large positive shift", () => {
  expect(caesarCipher("Aa Oo Zz", 421)).toBe("Ff Tt Ee");
});
test("small negative shift", () => {
  expect(caesarCipher("Aa Oo Zz", -5)).toBe("Vv Jj Uu");
});
test("large negative shift", () => {
  expect(caesarCipher("Aa Oo Zz", -421)).toBe("Vv Jj Uu");
});
test("sentence with small positive shift", () => {
  expect(caesarCipher("What, a string!", 5)).toBe("Bmfy, f xywnsl!");
});
test("sentence with large positive shift", () => {
  expect(caesarCipher("What, a 22 string?", 421)).toBe("Bmfy, f 22 xywnsl?");
});
test("sentence with small negative shift", () => {
  expect(caesarCipher("Bmfy, f 22 xywnsl?", -5)).toBe("What, a 22 string?");
});
test("sentence with large negative shift", () => {
  expect(caesarCipher("Lose Yourself 2@?", -210)).toBe("Jmqc Wmspqcjd 2@?");
});
