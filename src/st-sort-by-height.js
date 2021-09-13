'use strict';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  let res = [];

  arr.forEach((element, index) => {
    if (element === -1){
      res.push(index);
    }
  });

  arr.sort(function(a,b){ 
    return a - b;
  });

  arr = arr.slice(res.length);
  for(let i = 0; i <res.length;i++) {
    arr.splice(res[i], 0, -1);
  }
  return arr;
  //console.log(arr);
}
//sortByHeight([ -1, -1, -1, -1, -1]);


