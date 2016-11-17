'use strict';

function quickSort(array) {

  if(array.length < 3) {
    if(array.length > 2) {
      if(array[0] > array [1]) {
        var temp = array[0];
        array[0] = array[1];
        array[0] = temp;
      }
    }
    return array;
  }
  //Start by getting a pivot
  var first = array[0];
  var middle = array[Math.floor((array.length - 1)/2)];
  var last = array[array.length-1];
  var pivot;
  var pivotIndex;
  switch (true) {
    case ((first < last) && (first > middle)) || ((first < middle) && (first > last)):
      pivot = first;
      pivotIndex = 0;
      break;
    case ((last < first) && (last < middle)) || ((last < middle) && (last < first)):
      pivot = last;
      pivotIndex = array.length - 1;
      break;
    case ((middle < first) && (middle > last)) || ((middle < last) && (middle > first)):
      pivot = middle;
      pivotIndex = Math.floor((array.length - 1)/2);
      break;
    default:
    //console.log("default");
      pivot = first;
      pivotIndex = 0;
  }
  array[pivotIndex] = null;
  //console.log('between first: '+first+', middle: '+middle+' and last: '+last+ '... I selected pivot: ' + pivot);
  var leftIndex = 0;
  var rightIndex = array.length - 1;
  var rightTurn = true;
  while (leftIndex < rightIndex) {
    if(rightTurn) {
      if((array[rightIndex] < pivot) && [rightIndex > pivotIndex]) {
        array[pivotIndex] = array[rightIndex];
        array[rightIndex] = null;
        pivotIndex = rightIndex;
        rightTurn = !rightTurn;
      }
      rightIndex--;
    } else {
      if((array[leftIndex] > pivot) && [leftIndex < pivotIndex]) {
        array[pivotIndex] = array[leftIndex];
        array[leftIndex] = null;
        pivotIndex = leftIndex;
        rightTurn = !rightTurn;
      }
      leftIndex++;
    }
  }
  array[pivotIndex] = pivot;
  //console.log(JSON.stringify(array));
  var leftArray = array.slice(0, pivotIndex);
  var rightArray = array.slice(pivotIndex+1);
  /*console.log('left side: ' + leftArray);
  console.log('middle side: ' + pivot);
  console.log('right side: ' + rightArray);*/
  leftArray = quickSort(leftArray);
  rightArray = quickSort(rightArray);
  leftArray.push(pivot);
  array = leftArray.concat(rightArray);
  return array;
}

console.log(quickSort([7, 6, 3, 8, 4, 5, 2 , 1, 0, 9]));
console.log(quickSort([7, 6, 3, 8, 4, 5, 2 , 1, 0, 9]));
