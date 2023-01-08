# base64 library

[![NPM version](https://img.shields.io/npm/v/base64-cjs.svg)](https://www.npmjs.com/package/ base64-cjs)
[![NPM downloads](https://img.shields.io/npm/dm/base64-cjs.svg)](https://www.npmjs.com/package/base64-cjs)
[![Known Vulnerabilities](https://snyk.io/test/github/grjan7/base64-cjs/badge.svg)](https://snyk.io/test/github/grjan7/base64-cjs)

A library to encode to and decode from base64, similar to atob btoa of native JavaScript functions.

## Installation 

```sh
  $ npm install base64-cjs
```

## base64.encode(plainStr)

```js

  import Base64 from 'base64';

  const myObj = {name: "john", age: 30};
  const myObjString = JSON.stringify(myObj);
  const base64EncodedString = Base64.encode(myObjString);

  console.log(base64EncodedString);

  ```

## base64.decode(base64Str)

```js

  import Base64 from 'base64';

  const myObj = {name: "john", age: 30};
  const myObjString = JSON.stringify(myObj);
  const base64EncodedString = Base64.encode(myObjString);

  const decodedBase64String = Base64.decode(base64EncodedMyObj);
  
  console.log(JSON.parse(decodedBase64String));

  ```