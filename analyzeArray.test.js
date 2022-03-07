const analyzeArray = require("./analyzeArray");

test("find average", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});
test("find minimum", () => {
  expect(analyzeArray([1, 2, -3, 4, 5]).min).toBe(-3);
});
test("find maximum", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
});
test("find length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
});
