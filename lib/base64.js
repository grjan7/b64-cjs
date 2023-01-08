'use strict'

const repeat = require("./util/repeat.js")
const bin2Dec = require("./util/bin2Dec.js")
const str2Bin = require("./util/str2Bin.js")
const dec2Bin = require("./util/dec2Bin.js")

/**
 * Type Base64
 * 
 * @example
 * 
 * let greeting = {
    name: "arun",
    age: 20,
    isMarried: true,
    like: ["a", "juice", {}]
  };

  let greetingString = JSON.stringify(greeting);
  let base64EncodedString = Base64.encode(greetingString);
  let decodedBase64 = Base64.decode(base64EncodedString);
  let greetingAfterBase64 = JSON.parse(decodedBase64);

  console.log(greeting);
  console.log(greetingString);
  console.log(base64EncodedString);
  console.log(decodedBase64);
  console.log(greetingAfterBase64);
  
 */
class Base64 {

  static BASE64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  /**
   * 
   * @param {string} plainStr a string to be encoded to base64
   * @returns {string} base64-encoded string
   * 
   */

  static encode(plainStr) {
    let str = plainStr
    let paddingLength = (str.length % 3) == 0 ? 0 : 3 - (str.length % 3)
    let binStr = str2Bin(str)
    let zeroPadding = repeat("0", paddingLength * 8)
    let paddedBin = binStr + zeroPadding
    let base64Str = ""

    for (let i = 0; i < paddedBin.length; i += 6) {
      base64Str += Base64.BASE64[bin2Dec(paddedBin.slice(i, i + 6))]
    }

    let equalPadding = repeat("=", paddingLength)
    let validBase64Str = base64Str.slice(0, base64Str.length - paddingLength)
    let equalPaddedBase64Str = validBase64Str + equalPadding

    return equalPaddedBase64Str
  }

  /**
   * 
   * @param {string} base64Str base64-encoded string
   * @returns {string} decoded string from base64-encoded string
   * 
   */

  static decode(base64Str) {
    let eqIndex = base64Str.indexOf("=")
    let mainStr = (eqIndex != -1) ? base64Str.slice(0, eqIndex) : base64Str
    let paddingLength = base64Str.length - mainStr.length
    let binStr = ""
    let asciiStr = ""

    for (let i = 0; i < mainStr.length; i++) {
      let currChar = mainStr[i]
      binStr += dec2Bin(Base64.BASE64.indexOf(currChar), 6)
    }

    binStr += repeat("0", paddingLength * 6)

    for (let j = 0; j < binStr.length; j += 8) {
      let decValue = bin2Dec(binStr.slice(j, j + 8))
      asciiStr += String.fromCharCode(decValue)
    }
    return asciiStr.slice(0, asciiStr.length - paddingLength)
  }
}

module.exports = Base64