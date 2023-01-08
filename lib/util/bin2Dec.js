'use strict'

/**
 * 
 * @param {string} binStr a string of bits
 * @returns {number} equivalent decimal value
 * @example
 * 
 * bin2Dec("00001011") // returns 11
 * bin2Dec("11111111") // returns 255
 * 
 */
const bin2Dec = (binStr) => {
  let decVal = 0
  let j = 0
  for (let i = binStr.length - 1; i >= 0; i--) {
    decVal += parseInt(binStr[i]) * (2 ** j)
    j++
  }
  return decVal
}

module.exports = bin2Dec

