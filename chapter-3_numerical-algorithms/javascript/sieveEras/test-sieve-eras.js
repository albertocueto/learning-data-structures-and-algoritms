'use strict';

var sieve = require('./sieve-eras');

console.log(JSON.stringify(sieve(1, 100)));
console.log(JSON.stringify(sieve(50, 100)));
console.log(JSON.stringify(sieve(1, 100000)));
console.log(JSON.stringify(sieve(1, 1000000)));
