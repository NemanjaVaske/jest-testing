const capitalize = require("./capitalize");

test("return string with first character capitalized", () => {
  expect(capitalize("john")).toBe("John");
});
