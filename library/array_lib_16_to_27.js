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

const extractDigits = function(number){
  let numberString = number.toString();
  let numbers = numberString.split('');
  return numbers;
}

const isElementExist = function(uniqueArray, element){
  let status = false;
  for(let index in uniqueArray){
    if(uniqueArray[index] == element){
      status = true;
    }
  }
  return status;
}

const removeDuplicates = function(inputArray){
  let uniqueArray = [];
  for (let index in inputArray){
      if(!isElementExist(uniqueArray, inputArray[index])){
        uniqueArray.push(inputArray[index]);
      }
  }
  return uniqueArray;
}

exports.findIndex = findIndex;
exports.checkAscendingOrder = checkAscendingOrder;
exports.checkDescendingOrder = checkDescendingOrder;
exports.extractDigits = extractDigits;
exports.removeDuplicates = removeDuplicates;
