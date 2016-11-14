'use strict';

function primeFactors(x) {
  var factors = [];
  while((Math.abs(x % 2)) === 0) {
    factors.push(2);
    x /= 2;
  }
  var factor = 3;
  var stopAt = Math.sqrt(x);
  while(factor <= stopAt) {
    //Pull out multiples of factor:
    while((Math.abs(x % factor)) === 0) {
      factors.push(factor);
      x /= factor;
      stopAt = Math.sqrt(x);
    }
    factor += 2;
  }
  if(x > 1) {
    factors.push(x);
  }
  return factors;
}

module.exports = primeFactors;
