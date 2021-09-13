'use strict';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {    
  let data = date;

  if (!data) {
    return 'Unable to determine the time of year!';
  }
  try{
    data.getTime();
    let month = data.getMonth().toString();
    let exp;
    if (month.match(/^(11|0|1)$/g)) {
      return 'winter';
    }
    if (month.match(/^(2|3|4)$/g)) {
      return 'spring';
    }
    if (month.match(/^(5|6|7)$/g)) {
      return 'summer';
    }
    if (month.match(/^(8|9|10)$/g)) {
      return 'autumn';
    }
  }
  catch (e) {
    throw (new Error("Invalid date!"));    
  }
  
}