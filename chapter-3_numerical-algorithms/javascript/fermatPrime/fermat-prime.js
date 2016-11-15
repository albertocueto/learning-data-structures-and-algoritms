'use strict';

function fermatIsPrime(x) {
  if(x === 2) return true;
  console.log('x: ' + x)
  var confidence = Math.floor(x / 2);
  console.log('confidence: ' + confidence);
  var resultCount = 0;
  while (resultCount < confidence) {
    var random = Math.floor((Math.random() * (x - 1)) + 2); //A random number that is larger that 1, but less tan x
    console.log('random: ' + random);
    var ranPow = Math.pow(random, x-1);
    console.log('ranPow: ' + ranPow);
    if(ranPow === Infinity || ranPow === -Infinity) {
      throw new Error('Math.pow(random, x-1) went up to Infinity...');
    }
    var testResult = Math.abs((ranPow) % x);
    console.log('testResult: ' + testResult);
    if(testResult !== 1) {
      //Not prime
      return false;
    } else {
      resultCount++;
      console.log('resultCount: ' + resultCount);
    }
  }
  return true;
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

exports.fermatIsPrime = fermatIsPrime;
exports.isPrime = isPrime;
