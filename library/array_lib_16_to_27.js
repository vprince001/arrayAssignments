const findLowest = require("./array_lib_1_to_15").findLowest;

const findIndex = function(inputArray,number){
  for(let index in inputArray){
    if(inputArray[index] == number){
      return index;
    }
  }
  return "no match found"
}

const checkAscendingOrder = function(inputArray){
  for(let index = 0; index < inputArray.length; index++){
    if(inputArray[index] > inputArray[index+1]){
      return false;
    }
  }
  return true;
}

const checkDescendingOrder = function(inputArray){
  for(let index = 0; index < inputArray.length; index++){
    if(inputArray[index] < inputArray[index+1]){
      return false;
    }
  }
  return true;
}

exports.findIndex = findIndex;
exports.checkAscendingOrder = checkAscendingOrder;
exports.checkDescendingOrder = checkDescendingOrder;
