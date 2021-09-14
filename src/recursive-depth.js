'use strict';
import { NotImplementedError } from '../extensions/index.js';

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
export default class DepthCalculator {
  calculateDepth( arr) {
  //throw new NotImplementedError('Not implemented');

  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
    res += this.calculateDepth(arr.flat());//нашел массив - раскрыл его. 
    break;// останалвивает текущий перебор, когда видит массив.
  }
}
return res;  
}
}
