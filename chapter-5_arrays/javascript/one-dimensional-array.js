'use strict';

var array = [0, 1, 1, 2, 3, 5, 8, 13, 21];

console.log(array);

//Min and Max:
var min = array[0];
var max = array[0];
for(var i = 1; i < array.length; i++) {
  if(array[i] < min) {
    min = array[i];
  }
  if(array[i] > min) {
    max = array[i];
  }
}

console.log('min: ' + min + ', max: ' + max);

//Total:
var totalSum = 0;
for (var i = 0; i < array.length; i++) {
  totalSum += array[i];
}

console.log('total: ' + totalSum);

//Mean (Average):
var average = totalSum / array.length;

console.log('average: ' + average);

//Variance: the avergae of the sums of the squares of the values - the mean:
var variance = 0;
for (var i = 0; i < array.length; i++) {
  variance += Math.pow(array[i] - average, 2);
}
variance /= array.length;

console.log('variance: ' + variance);

//standard deviation: square root of the variance:
var stanDev = Math.sqrt(variance);

console.log('standard deviation: ' + stanDev);
