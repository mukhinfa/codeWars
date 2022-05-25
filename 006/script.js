// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

"use strict";

const reverseWords = (str) =>  str.split(' ').map(a => a.split('').reverse().join('')).join(' ');
console.log(`sihT si na !elpmaxe = ${reverseWords('This  is  an  example!')}`);

// 2 вариант
function reverseWords2(str) {
    return str.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
  }
console.log(`sihT si na !elpmaxe = ${reverseWords2('This  is  an  example!')}`);


  