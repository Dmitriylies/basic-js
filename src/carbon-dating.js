'use strict';
import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample( sampleActivity ) {
    if (typeof sampleActivity === 'string') {

        if (!isNaN(sampleActivity) &&
            typeof +sampleActivity === 'number' &&
            +sampleActivity <= 15 &&
            +sampleActivity > 0
           ) {
            const modernActivuty = 15;
            const halfLife = 5730;
    
            let ln = Math.log(modernActivuty/ sampleActivity);
            let k = 0.693 / halfLife;
            let t = Math.ceil(ln / k);

            return t;
        } else {
          return false;
        }
        
    } else {
      return false;
    }
    
}