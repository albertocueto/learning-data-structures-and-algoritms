'use strict'

var reverseArray = require('./reverse-array');

console.log('test 1: array of numbers');
var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('original array:');
var result = reverseArray(array);

console.log(JSON.stringify(array));
console.log('reversed array:');
console.log(JSON.stringify(result));

result.length = 0;

console.log('test 2: string');
array = 'anita lava la tina';
console.log(array);
result = reverseArray(array);
console.log('original array:');
console.log(JSON.stringify(array));
console.log('reversed array:');
console.log(JSON.stringify(result));
