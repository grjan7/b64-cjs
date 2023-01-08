'use strict'
/**
 * 
 * @param {number} num a decimal number
 * @param {number} bitLen size of bits
 * @returns {string} a string bits
 * 
 * @example
 * 
 * dec2Bin(65, 8) // returns "01000001"
 * dec2Bin(92, 8) // returns "01011100"
 * 
 */
const dec2Bin = (num, bitLen) => {
  let bits = ""
  let _num = num
  for (let i = 0; i < bitLen; i++) {
    bits += _num % 2
    _num = Math.floor(_num / 2)
  }
  return bits.split("").reverse().join("")
}

module.exports = dec2Bin 