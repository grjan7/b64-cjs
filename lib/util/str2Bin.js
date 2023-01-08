'use strict'

const dec2Bin = require("./dec2Bin.js")
/**
 * 
 * @param {string} str a string to be coverted to bits string
 * @returns {string} converts string to unsigned 8-bit string
 * @example
 * 
 * str2Bin("Hello") // returns "0100100001100101011011000110110001101111"
 * str2Bin("H") // returns "01001000"
 * str2Bin("0") // returns "00110000"
 * 
 */
const str2Bin = (str) => {
  let binStr = ""
  for (let i = 0; i < str.length; i++) {
    binStr += dec2Bin(str.charCodeAt(i), 8)
  }
  return binStr
}

module.exports = str2Bin
