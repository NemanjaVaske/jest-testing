const calculator = require("./calculator");

test("adds two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
test("adds two negative numbers", () => {
  expect(calculator.add(-3, 4)).toBe(1);
});
test("substract two numbers", () => {
  expect(calculator.substract(6, 3)).toBe(3);
});
test("substract two negative numbers", () => {
  expect(calculator.substract(-2, -20)).toBe(18);
});
test("divide two numbers", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});
test("divide negative numbers", () => {
  expect(calculator.divide(8, -2)).toBe(-4);
});
test("divide 0 with number", () => {
  expect(calculator.divide(0, 2)).toBe(0);
});
test("divide two numbers with float result", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});
test("multiply two numbers", () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});
test("multiply two negative numbers", () => {
  expect(calculator.multiply(-5, -4)).toBe(20);
});
test("multiply with 0", () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});
