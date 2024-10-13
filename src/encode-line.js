const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrCharStr = str.split('');
  let numberIdentlSymbol = 1;
  let stringEncoding = '';
  for (let i = 0; i < arrCharStr.length; i += 1) {
    if (arrCharStr[i] === arrCharStr[i + 1]) {
      numberIdentlSymbol += 1;
    } else {
      stringEncoding += (numberIdentlSymbol > 1 ? numberIdentlSymbol : '') + arrCharStr[i];
      numberIdentlSymbol = 1;
    }
  }
  return stringEncoding;
}

module.exports = {
  encodeLine
};
