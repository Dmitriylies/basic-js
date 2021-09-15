'use strict';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  //throw new NotImplementedError('Not implemented');
  let res = 0;
  for (let i = 0; i < matrix[0].length; ++i) {
    res += matrix[0][i];
  }  
  function calcMatrx(n = 0) {
    matrix[n].forEach((element, i) => {
      if(matrix[n-1][i] !== 0) {
        res += matrix[n][i];
      } 
    });
  }
  for (let i = 1; i < matrix.length; i++) {
    calcMatrx(i);
  }
  return res;
}