// importing function from other library
const findLowest = require("./array_lib_1_to_15").findLowest;

/* this function will return the index 
 * of a given number from a given array */
const findIndex = function(inputArray,number){
  for(let index in inputArray){
    if(inputArray[index] == number){
      return index;
    }
  }
  return "no match found"
}

/* this function will check if first number 
 * is greater than second number or not. */
const isNumberGreater = function(firstNumber, secondNumber){
  isGreater = false;
  if(firstNumber > secondNumber){
    isGreater = true;
  }
  return isGreater;
}

/* this function will check whether a given array 
 * is ascending or not */
const checkAscendingOrder = function(inputArray){
  for(let index = 0; index < inputArray.length; index++){
    if(inputArray[index] > inputArray[index+1]){
      return false;
    }
  }
  return true;
}

/* this function will check whether a given array 
 * is descending or not */
const checkDescendingOrder = function(inputArray){
  for(let index = 0; index < inputArray.length; index++){
    if(inputArray[index] < inputArray[index+1]){
      return false;
    }
  }
  return true;
}

/* this function will seperate all digits 
 * of a given number with a comma and return an array */
const extractDigits = function(number){
  let numberString = number.toString();
  let numbers = numberString.split('');
  return numbers;
}

/* this function will check whether an element 
 * exists in a given array or not */
const isElementExist = function(uniqueArray, element){
  let status = false;

  for(let index in uniqueArray){
    if(uniqueArray[index] == element){
      status = true;
    }
  }
  return status;
}

/* this function will remove all duplicate elements 
 * from a given array and return an array of all unique elements */
const removeDuplicates = function(inputArray){
  let uniqueArray = [];

  for (let index in inputArray){
      if(!isElementExist(uniqueArray, inputArray[index])){
        uniqueArray.push(inputArray[index]);
      }
  }
  return uniqueArray;
}

/* this function will concatinate two given arrays 
 * and return a single concatinated array */
const unionArrays = function(firstArray, secondArray){
  return unionArray = removeDuplicates(firstArray.concat(secondArray));
}

/* this function will take two array as arguments, remove duplicates and 
 * return an array of all matching elements from the two arrays */
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

/* this function will compare two given arrays 
 * and return all the unique elements from the first array */
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

/* this function will take two array as arguments 
 * and check whecther second array is a subset of first array of not */
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

/* this function will return a zip 
 * from two given arrays */
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

/* this function will retun an array 
 * rotated from a given number from a given array */
const rotateArray = function(inputArray, firstMatch) {
  let rotatedArray = [];
  let count = 0;

  for (let index = firstMatch; index < inputArray.length; index++) {
    rotatedArray[count] = inputArray[index];
    count++;
  }

  for (let index = 0; index < firstMatch; index++) {
    rotatedArray[count] = inputArray[index];
    count++;
  }
  return rotatedArray;
}

/* this function will swap number of given 
 * index to the end of all smaller numbers from a given array */
const swapElements = function(inputArray, index) {
  if(inputArray[index] > inputArray[index+1]){
    let greaterValue = inputArray[index];
    inputArray[index] = inputArray[index+1];
    inputArray[index+1] = greaterValue;
  }
  return inputArray;
}

/* this function will sort a given 
 * array in ascending order */
const sortInAscending = function(inputArray) {

  for(iteration = 0; iteration < inputArray.length; iteration++){
    for(let index = 0; index < inputArray.length; index++) {
      swapElements(inputArray, index)
    }
  }
  return inputArray;
}

/* this function will return an array 
 * after dividing a given array in two arrays from the selected value */
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

//exporting all functions
exports.findIndex = findIndex;
exports.checkAscendingOrder = checkAscendingOrder;
exports.checkDescendingOrder = checkDescendingOrder;
exports.extractDigits = extractDigits;
exports.removeDuplicates = removeDuplicates;
exports.unionArrays = unionArrays;
exports.giveIntersections = giveIntersections;
exports.extractUniqueFromFirst = extractUniqueFromFirst;
exports.isArraySubset = isArraySubset;
exports.zipTwoArrays = zipTwoArrays;
exports.rotateArray = rotateArray;
exports.sortInAscending = sortInAscending;
exports.partitionArray = partitionArray;
