'use strict';

function reverseArray(array) {
  var isString = (typeof array === 'string')? true : false;
  if(isString) {
    array = array.split('');
  }
  var stack = [];
  for (var i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }
  //console.log(stack);
  var result = new Array(stack.length);
  for (var i = 0; i < result.length; i++) {
    result[i] = array.pop();
  }
  if(isString) {
    result = result.join();
  }
  return result;
}

module.exports = reverseArray;
