'use strict';

//N(N-1)/2

var citiesDistance = []
citiesDistance[0] = [0, 790, 1745, 1852]; //Chicago
citiesDistance[1] = [790, 0, 2776, 2564]; //New York
citiesDistance[2] = [1745, 2776, 0, 381]; //Los Angeles
citiesDistance[3] = [1852, 2564, 381, 0]; //San Francisco

//Determine how much space we need in the triangular array:

var triangularSize = (citiesDistance.length*(citiesDistance.length -1))/2;

console.log('triangular size: ' + triangularSize);

var triangularArray = new Array(triangularSize);

console.log(triangularArray);

for (var i = 0; i < citiesDistance.length; i++) {
  var currentRow = citiesDistance[i];
  for (var j = 0; j < currentRow.length; j++) {
    if(i < j) {
      var index = (j*(j-1))/2 + i; //Switched column and row
      triangularArray[index] = currentRow[j];
    }
  }
}

console.log(triangularArray);
