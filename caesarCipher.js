const caesarCipher = (string, shift) => {
  shift = shift % 26;
  if (shift < 0) {
    shift = 26 + shift;
  }
  let ascii = string.split("").map((char) => char.charCodeAt(0));
  let shiftedString = ascii.map((char) => {
    if (char >= 65 && char <= 90) {
      if (char + shift >= 65 && char + shift <= 90) {
        return char + shift;
      } else {
        return char + shift - 26;
      }
    } else if (char >= 97 && char <= 122) {
      if (char + shift >= 97 && char + shift <= 122) {
        return char + shift;
      } else {
        return char + shift - 26;
      }
    } else {
      return char;
    }
  });
  let caesarCipherString = shiftedString
    .map((char) => String.fromCharCode(char))
    .join("");
  return caesarCipherString;
};

module.exports = caesarCipher;
