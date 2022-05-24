// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

"use strict";

function grow(x) {
    let answer = 1;
    x.forEach(element => answer *= element);
    return answer;
}

console.log(grow([1, 2, 3, 4]));

// Второй вариант

function grow2(x) {
    return x.reduce((a, b) => a * b, 1);
}
console.log(grow2([1, 2, 3, 4]));
