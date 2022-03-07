const reverseString = require("./reverseString");

test("return reversed string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse sentence", () => {
  expect(reverseString("Hi, how are you 2?")).toBe("?2 uoy era woh ,iH");
});
