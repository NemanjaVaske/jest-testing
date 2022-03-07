const analyzeArray = (arr) => {
  let average = arr.reduce((a, b) => a + b, 0) / arr.length;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let length = arr.length;
  let answer = {
    average,
    min,
    max,
    length,
  };
  return answer;
};

module.exports = analyzeArray;
