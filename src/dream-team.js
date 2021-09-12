'use strict';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members) {
  //throw new NotImplementedError('Not implemented');
  const arr = members;
  let res = [];

  try {
    arr.forEach(element => {
      if (typeof element === 'string') {
        let cut = element.trim().toLocaleUpperCase();
        res.push(cut[0]);
      }
    });
  }
  catch(e) {
    return false;
  }
  return res.sort().join('');
}
