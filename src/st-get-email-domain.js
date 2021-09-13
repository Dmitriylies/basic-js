'use strict';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain( email ) {
  //throw new NotImplementedError('Not implemented');
  let index;
  email.split('').forEach((item, indexs) => {
    if (item === '@') {
      index = indexs;
    }
  });
  let res = email.slice(index+1);

  return res;  
}
