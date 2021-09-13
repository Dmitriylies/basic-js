'use strict';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  // throw new NotImplementedError('Not implemented');
  let addit =[];
  let res = [];
  str = String(str);
  if (options.addition === null) {
    options.addition = String(options.addition);
  }
  
  function concat(n = 1, arr, item){
    for(let i = 0; i < n; i++) {
       arr.push(item);
    }
  }
  
  concat(options.additionRepeatTimes, addit, options.addition);
  if (options.additionSeparator){
    addit = addit.join(options.additionSeparator);
  } else {
    addit = addit.join('|');
  }
  concat(options.repeatTimes, res, `${str}${addit}`);

  if (options.separator){
    res = res.join(options.separator);
  } else {
    res = res.join('+');
  }
  return res;
  
}

//repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 });