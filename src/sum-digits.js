const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((acc, cur) => acc + +cur, 0); // тут 0 указан т.к. сложение начинается с 0, а не с 1-го эл. (он явл. строкой)
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
