'use strict';

(function () {
  const Base64 = require('../index.js')
  const { equal, deepEqual } = require("assert")

  let greeting = {
    name: "arun",
    age: 20,
    isMarried: true,
    like: ["a", "juice", {}]
  };

  let greetingString = JSON.stringify(greeting)
  let base64EncodedString = Base64.encode(greetingString)
  let b64Str = Buffer.from(greetingString).toString("base64")
  let decodedBase64 = Base64.decode(base64EncodedString)
  let greetingAfterBase64 = JSON.parse(decodedBase64)

  const isAToBEqual = equal(base64EncodedString, b64Str)
  const isBToAEqual = equal(decodedBase64, greetingString)
  const isDeepEqual = deepEqual(greetingAfterBase64, greeting)

  console.log("\nInput Object\n")
  console.log(greeting)
  console.log("\nStringified Object\n")
  console.log(greetingString)
  console.log("\nBase64 Encoded String by Base64.encode()\n")
  console.log(base64EncodedString)
  console.log("\nEncoded String by Buffer.from()\n")
  console.log(b64Str)
  console.log("\nDecoded string by Base64.decode()\n")
  console.log(decodedBase64)
  console.log("\nParsed decoded string\n")
  console.log(greetingAfterBase64)
  console.log("\n")
  console.log(isAToBEqual == undefined ? "passed" : "failed")
  console.log(isBToAEqual == undefined ? "passed" : "failed")
  console.log(isDeepEqual == undefined ? "passed" : "failed")
})()
