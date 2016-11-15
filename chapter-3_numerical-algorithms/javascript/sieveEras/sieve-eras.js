'use strict';

var isPrime = require('../fermatPrime/fermat-prime').isPrime;

//Return an array of the prime numbers between the two numbers:
function sieve(a, b) {
  a = a || 0;
  b = b || 0;
  if(b < a) {
    throw new Error('b must be larger than or equal to a');
  }
  var arrayNumbers = [];
  //O(N)
  if(a === 1) {
    a++;
  }
  for (var i = a; i <= b; i++) {
    arrayNumbers.push(i);
  }
  //console.log(arrayNumbers.length);
  //console.log(JSON.stringify(arrayNumbers));
  //find first multiple of 2, if it's 2, then leave it be and start looping, if it's not, then :
  var firstTwoIndex;
  var count = 0;
  while(!firstTwoIndex && firstTwoIndex !== 0) {
    var currentNum = arrayNumbers[count];
    if((Math.abs(currentNum % 2) === 0) && currentNum != 2) {
      //cross that number out:
      //console.log(arrayNumbers[count]);
      arrayNumbers[count] = null;
      firstTwoIndex = count;
    } else {
      count++;
    }
  }
  //console.log(JSON.stringify(arrayNumbers));
  //console.log(firstTwoIndex);
  //Remove all multiples of 2 for we know those are not primes:
  for (var i = firstTwoIndex; i < arrayNumbers.length; i += 2) {
    arrayNumbers[i] = null;
  }
  //console.log(JSON.stringify(arrayNumbers));
  //console.log(JSON.stringify(arrayNumbers));

  for (var i = firstTwoIndex + 1; i < arrayNumbers.length; i++) {
    //console.log(i + '? ' + isPrime(i));
    if(isPrime(arrayNumbers[i])) {
      //console.log(arrayNumbers[i] + ' is prime');
      for (var multiple = (arrayNumbers[i] * arrayNumbers[i]); multiple <= arrayNumbers.length; multiple += 2 * arrayNumbers[i]) {
        //console.log(multiple +': ' + arrayNumbers[multiple+1]);
        arrayNumbers[multiple] = null;
      }
    } else {
      arrayNumbers[i] = null;
    }
  }
  var result = [];
  for (var i = 0; i < arrayNumbers.length; i++) {
    if(arrayNumbers[i] !== null) {
      result.push(arrayNumbers[i]);
    }
  }
  console.log('Eratosthenes found ' + result.length + ' prime numbers between ' + (a-1) + ' and ' + b);
  return result;
}

module.exports = sieve;
