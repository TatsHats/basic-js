const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let currentDepth = 1;

    arr.forEach(el => {
      if (Array.isArray(el)) { // Если эл. это массив (влож.) - глубина +1
        currentDepth = Math.max(currentDepth, this.calculateDepth(el) + 1); 
      }
    });

    return currentDepth;
  }
}

module.exports = {
  DepthCalculator
};
