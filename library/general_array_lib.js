/* this function will return a reverse array
 * from a given array */
const reverseArray = function(inputArray){
  let reversedArray = [];
  let index = (inputArray.length) - 1;

  for(let element of inputArray){
    reversedArray[index] = element;
    index--;
  }
  return reversedArray;
}

/* this function will return an array of 
 * all alternate elements from a given array */
const extractAlternateElements = function(inputArray){
  let filteredArray = [];
  let filteredArrayIndex = 0;

  for(let index = 0; index < inputArray.length; index++){
    filteredArray[filteredArrayIndex] = inputArray[index];
    filteredArrayIndex++;
    index++;
  }
  return filteredArray;
}

/* this array will return an array of 
   length of all elements from a given array */
const mapLengths = function(inputArray){
  let mappedArray = [];
  let element;
  for(index in inputArray){
    element = inputArray[index].toString();
    mappedArray[index] = element.length;
  }
  return mappedArray;
}

/* this function will return the index 
 * of a given number from a given array */
const findIndex = function(inputArray,number){
  for(let index in inputArray){
    if(inputArray[index] == number){
      return index;
    }
  }
  return -1;
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

/* this function will seperate all characters 
 * of a given element with a comma and return an array */
const extractAllChars = function(element){
  let elementString = element.toString();
  let elements = elementString.split('');
  return elements;
}

/* this function will check whether an element 
 * exists in a given array or not */
const isElementExist = function(uniqueArray, element){
  let isExist = false;

  for(let index in uniqueArray){
    if(uniqueArray[index] == element){
      isExist = true;
    }
  }
  return isExist;
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
const extractIntersections = function(firstArray,secondArray){
  let firstUnique = removeDuplicates(firstArray);
  exports.sortInAscending = sortInAscending;
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
 * and check whether second array is a subset of first array of not */
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
const rotateArray = function(inputArray, element) {
  let rotatedArray = [];
  let count = 0;
  let startIndex = findIndex(inputArray,element);
  startIndex++;

  for (let index = startIndex; index < inputArray.length; index++) {
    rotatedArray[count] = inputArray[index];
    count++;
  }

  for (let index = 0; index < startIndex; index++) {
    rotatedArray[count] = inputArray[index];
    count++;
  }
  return rotatedArray;
}

/* this function will swap number of given 
 * index to the end of all smaller numbers from a given array */
const sortTwoElements = function(inputArray, index) {
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
      sortTwoElements(inputArray, index)
    }
  }
  return inputArray;
}

/* this function will return an array 
 * after dividing a given array in two arrays from the selected value */
const partitionArray = function(inputArray, partitionElement) {
  let partitionedArray = [[], []];
  sortInAscending(inputArray);

  for(let index in inputArray) {
    partitionedArray[1].push(inputArray[index]);
    if(partitionElement >= inputArray[index]) {
      partitionedArray[0].push(inputArray[index]);
      partitionedArray[1].pop();
    }
  }
  return partitionedArray;
}

// exporting all functions
exports.reverseArray = reverseArray;
exports.extractAlternateElements = extractAlternateElements;
exports.mapLengths = mapLengths;
exports.findIndex = findIndex;
exports.checkAscendingOrder = checkAscendingOrder;
exports.checkDescendingOrder = checkDescendingOrder;
exports.extractAllChars = extractAllChars;
exports.isElementExist = isElementExist;
exports.removeDuplicates = removeDuplicates;
exports.unionArrays = unionArrays;
exports.extractIntersections = extractIntersections;
exports.extractUniqueFromFirst = extractUniqueFromFirst;
exports.isArraySubset = isArraySubset;
exports.zipTwoArrays = zipTwoArrays;
exports.rotateArray = rotateArray;
exports.sortInAscending = sortInAscending;
exports.partitionArray = partitionArray;
