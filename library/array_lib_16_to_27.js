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

const unionArrays = function(firstArray, secondArray){
  return unionArray = removeDuplicates(firstArray.concat(secondArray));
}

const giveIntersections = function(firstArray,secondArray){
  let firstUnique = removeDuplicates(firstArray);
  let secondUnique = removeDuplicates(secondArray);
  let intersectedArray = [];
  
  for(index in firstArray){
    if(isElementExist(secondUnique, firstUnique[index])){
      intersectedArray.push(firstUnique[index])
    }
  }
  return intersectedArray;
}

const extractUniqueFromFirst = function(firstArray, secondArray){
  let uniqueArray = [];
  let count = 0;
  for (let index in firstArray){
    if (!isElementExist(secondArray, firstArray[index])){
      uniqueArray[count] = firstArray[index];
      count++;
    }
  }
  return uniqueArray;
}

const isArraySubset = function(firstArray, secondArray){
  let sameElements = 0;
  let isSubset = false;
  for (let index in secondArray){
    if (isElementExist(firstArray, secondArray[index])){
      sameElements++;
    }
  }
  if (sameElements == secondArray.length){
    isSubset = true;
  }
  return isSubset;
}

const zipTwoArrays = function(firstArray, secondArray) {
  let zippedArray = [];
  let length = firstArray.length;
  if(secondArray.length < firstArray.length){
    length = secondArray.length;
  }
  for (let index = 0; index < length; index++) {
    zippedArray[index] = [];
    zippedArray[index][0] = firstArray[index];
    zippedArray[index][1] = secondArray[index];
  }
  return zippedArray;
}

const rotateArray = function(inputArray, startingIndex) {
  let rotatedArray = [];
  let count = 0;
  for (let index = startingIndex; index < inputArray.length; index++) {
    rotatedArray[count] = inputArray[index];
    count++;
  }
  for (let index = 0; index < startingIndex; index++) {
    rotatedArray[count] = inputArray[index];
    count++;
  }
  return rotatedArray;
}

const swapElements = function(inputArray, index) {
  if(inputArray[index] > inputArray[index+1]){
    let greaterValue = inputArray[index];
    inputArray[index] = inputArray[index+1];
    inputArray[index+1] = greaterValue;
  }
}

const sortInAscending = function(inputArray) {
  for(iteration = 0; iteration < inputArray.length; iteration++){
    for(let index = 0; index < inputArray.length; index++) {
      swapElements(inputArray,index)
    }
  }
  return inputArray;
}

const partitionArray = function(inputArray, selectedValue) {
  let partitionedArray = [[], []];
  sortInAscending(inputArray);

  for(let index in inputArray) {
    partitionedArray[1].push(inputArray[index]);
    if(selectedValue >= inputArray[index]) {
      partitionedArray[0].push(inputArray[index]);
      partitionedArray[1].pop();
    }
  }
  return partitionedArray;
}

exports.findIndex = findIndex;
exports.checkAscendingOrder = checkAscendingOrder;
exports.checkDescendingOrder = checkDescendingOrder;
exports.extractDigits = extractDigits;
exports.removeDuplicates = removeDuplicates;
exports.unionArrays = unionArrays;
exports.giveIntersections = giveIntersections;
exports.isArraySubset = isArraySubset;
exports.zipTwoArrays = zipTwoArrays;
exports.rotateArray = rotateArray;
exports.sortInAscending = sortInAscending;
exports.partitionArray = partitionArray;
