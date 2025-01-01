const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrS2 = s2.split('');
  let result = 0;

  for (let i = 0; i < s1.length; i += 1) {
    const char = s1[i];
    const indexChar = arrS2.indexOf(char);
    
    if (indexChar !== -1) {
      result += 1;
      arrS2.splice(indexChar, 1); // удаляем чтобы не посчитать его снова
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
