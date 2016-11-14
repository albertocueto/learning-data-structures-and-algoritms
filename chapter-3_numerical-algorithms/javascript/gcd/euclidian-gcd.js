'use strict';
function gcd(a, b) {
  while(b !== 0) {
    var remainder = Math.abs(a % b);
    a = b;
    b = remainder;
  }
  return a;
}

module.exports = gcd;
