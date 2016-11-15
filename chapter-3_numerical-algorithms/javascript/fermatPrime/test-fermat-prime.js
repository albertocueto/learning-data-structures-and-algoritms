'use strict';

var fermatIsPrime = require('./fermat-prime').fermatIsPrime;
var isPrime = require('./fermat-prime').isPrime;

console.log(fermatIsPrime instanceof Function);

console.log('2: ' + fermatIsPrime(2) + ', ' + isPrime(2));
console.log('3: ' + fermatIsPrime(3) + ', ' + isPrime(3));
console.log('5: ' + fermatIsPrime(5) + ', ' + isPrime(5));
console.log('7: ' + fermatIsPrime(7) + ', ' + isPrime(7));

console.log('4: ' + fermatIsPrime(4) + ', ' + isPrime(4));
console.log('6: ' + fermatIsPrime(6) + ', ' + isPrime(6));
console.log('8: ' + fermatIsPrime(8) + ', ' + isPrime(8));

console.log('101: ' + fermatIsPrime(101) + ', ' + isPrime(101));
console.log('89: ' + fermatIsPrime(89) + ', ' + isPrime(89));
