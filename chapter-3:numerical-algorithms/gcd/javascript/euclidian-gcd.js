'use strict';
function gcd(a, b) {
  while(b !== 0) {
    var remainder = Math.abs(a % b);
    a = b;
    b = remainder;
  }
  return a;
}


console.log(gcd(75, 25));
console.log(gcd(78, 66));
console.log(gcd(1500, 32589));
console.log(gcd(56789, 12344567));
