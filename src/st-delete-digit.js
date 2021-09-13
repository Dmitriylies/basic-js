'use strict';
import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit( n ) {
  //throw new NotImplementedError('Not implemented');
  
  let arr = n.toString().split(''),
  min = arr[0];
  for (let i = 1; i < arr.length; ++i) {
      if (arr[i] < min) min = arr[i];
  }
  let s = arr.indexOf(min);
  delete arr[s];
  arr = arr.flat().join('');
  return +arr;
  //console.log(arr.flat().join(''));
  
}
//deleteDigit( 1009 );