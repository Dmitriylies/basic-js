'use strict';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  //throw new NotImplementedError('Not implemented');
  
  if (!Array.isArray(arr) || arr === null) {
    throw Error ("'arr' parameter must be an instance of the Array!");
  }
  let res = arr.slice(0); 
  const length = arr.length - 1;

  function double(operator, i, len) {
    if (i !== len) {
      res[i] = res[operator];
    } else {
      delete res[i];
      res = res.flat();
    }
  }

  function discard(i1, i) {
    delete res[i];
       delete res[i1];
       res = res.flat(); 
  }
    for (let i = 0; i < arr.length; i++) {
      if (res[i] === '--double-next' ) {
        double(i+1, i, length);
      }
      if (res[i] === '--double-prev' && i !== 0) {
        double(i-1, i, 0);
      }
      if (res[i] === '--discard-prev') {   
        discard(i-1, i);
      }
      if (res[i] === '--discard-next') {
        discard(i+1, i);
      }
    }

    res.forEach((elem, i) => {
      if (elem === '--double-prev' || elem === '--discard-prev') {
        delete res[i];
        res = res.flat();
      }
    });
    
    return res;
}
//transform( [ '--double-prev', true ] ) ;
