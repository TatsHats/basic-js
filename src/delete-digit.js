const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringN = n.toString();
  let maxNum = 0;
  for (let i = 0; i < stringN.length; i += 1) {
    const num = parseInt(stringN.slice(0, i) + stringN.slice (i + 1), 10);
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
