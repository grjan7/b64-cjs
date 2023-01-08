'use strict'
/**
 * 
 * @param {string} str a char or string that to be repeated
 * @param {number} length number of times to be repeated
 * @returns {string} repeated string
 * @example
 *  
 * repeat("a", 3) // returns "aaa"
 * repeat("01", 3) // returns "010101"
 * repeat("Hello", 2) // returns "HelloHello"
 * 
 */
const repeat = (str, length) => {
  let repeatedStr = ''
  for (let i = 0; i < length; i++) {
    repeatedStr += str
  }
  return repeatedStr
}

module.exports = repeat