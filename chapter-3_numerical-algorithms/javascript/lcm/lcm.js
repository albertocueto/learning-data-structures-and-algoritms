'use strict';
var gcd = require('../gcd/euclidian-gcd');

function lcm(a, b) {
  var gcdnum = gcd(a, b);
  return (a/gcdnum) * b;
}

module.exports = lcm;
