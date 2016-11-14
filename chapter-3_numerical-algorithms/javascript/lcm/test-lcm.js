'use strict';

var lcm = require('./lcm');
var gcd = require('../gcd/euclidian-gcd');

console.log("gcd(75, 25): " + gcd(75, 25));
console.log("lcm(75, 25): " + lcm(75, 25));

console.log("\ngcd(78, 66): " + gcd(78, 66));
console.log("gcd(78, 66): " + lcm(78, 66));

console.log("\ngcd(1500, 32589): " + gcd(1500, 32589));
console.log("gcd(1500, 32589): " + lcm(1500, 32589));

console.log("\ngcd(56789, 12344567): " + gcd(56789, 12344567));
console.log("lcm(56789, 12344567): " + lcm(56789, 12344567));

console.log("\ngcd(10000, 20000): " + gcd(10000, 20000));
console.log("lcm(10000, 20000): " + lcm(10000, 20000));

console.log("\ngcd(12, 15): " + gcd(12, 15));
console.log("lcm(12, 15): " + lcm(12, 15));
