const reverseArray = function(input) {
  let reversedArray = [];
  let index = (input.length) - 1;

  for (let element of input){
    reversedArray[index] = element;
    index--;
  }
  return reversedArray;
};

const extractAlternateElements = function(inputArray) {
  return inputArray.filter(function(element,index) { 
    return index%2 == 0;
  })
};

const mapLengths = function(inputArray) {
  return inputArray.map(function(element) {
    return element.toString().length;
  })
};

const findIndex = function(inputArray,element) {
  return inputArray.indexOf(element);
};

const isInSpecificOrder = function(list, comparator) {
  const compare = function(previous,currentElement){
    let {prevElement} = previous;
    let {isInOrder} = previous;
    previous.isInOrder = (comparator(prevElement,currentElement)) && isInOrder;
    previous.prevElement = currentElement;
    return previous;
  }
  let result = list.reduce(compare, {prevElement : list[0], isInOrder : true});
  return result.isInOrder;
};

const isGreaterEqualTo = function(leftOperand, rightOperand){
  return leftOperand >= rightOperand;
}

const isSmallerEqualTo = function(leftOperand, rightOperand){
  return leftOperand <= rightOperand;
}

const isDescending = function(inputArray) {
  return isInSpecificOrder(inputArray, isGreaterEqualTo);
}

const isAscending = function(inputArray) {
  return isInSpecificOrder(inputArray, isSmallerEqualTo);
}

const extractAllChars = function(element) {
  let elementString = element.toString();
  let elements = elementString.split('');
  return elements;
}

const isElementExist = function(uniqueArray, element) {
  let isExist = false;

  for (let index in uniqueArray) {
    if (uniqueArray[index] == element) {
      isExist = true;
    }
  }
  return isExist;
}

const removeDuplicates = function(inputArray) {
  let uniqueArray = [];

  for (let index in inputArray) {
      if (!isElementExist(uniqueArray, inputArray[index])) {
        uniqueArray.push(inputArray[index]);
      }
  }
  return uniqueArray;
};

const unionArrays = function(firstArray, secondArray) {
  return unionArray = removeDuplicates(firstArray.concat(secondArray));
};

const extractIntersections = function(firstArray,secondArray) {
  let firstUnique = removeDuplicates(firstArray);
  let secondUnique = removeDuplicates(secondArray);
  let intersectedArray = [];
  
  for (index in firstArray) {
    if (isElementExist(secondUnique, firstUnique[index])) {
      intersectedArray.push(firstUnique[index])
    }
  }
  return intersectedArray;
};

const subtractSet = function(firstArray, secondArray){
  let uniqueArray = [];
  let count = 0;

  for (let index in firstArray) {
    if (!isElementExist(secondArray, firstArray[index])) {
      uniqueArray[count] = firstArray[index];
      count++;
    }
  }
  return uniqueArray;
};

const isArraySubset = function(firstArray, secondArray) {
  let sameElements = 0;
  let isSubset = false;

  for (let index in secondArray) {
    if (isElementExist(firstArray, secondArray[index])) {
      sameElements++;
    }
  }
  if (sameElements == secondArray.length) {
    isSubset = true;
  }
  return isSubset;
};

const zipTwoArrays = function(firstArray, secondArray) {
  let zippedArray = [];
  let length = firstArray.length;
  if (secondArray.length < firstArray.length) {
    length = secondArray.length;
  }

  for (let index = 0; index < length; index++) {
    zippedArray[index] = [];
    zippedArray[index][0] = firstArray[index];
    zippedArray[index][1] = secondArray[index];
  }
  return zippedArray;
};

const rotateArray = function(input, startIndex) {
  for (let index = 0; index < startIndex; index++) {
    input.push(input.shift());
  }
  return input;
};

const sortTwoElements = function(inputArray, index) {
  if (inputArray[index] > inputArray[index+1]) {
    let greaterValue = inputArray[index];
    inputArray[index] = inputArray[index+1];
    inputArray[index+1] = greaterValue;
  }
  return inputArray;
};

const sortInAscending = function(inputArray) {

  for (iteration = 0; iteration < inputArray.length; iteration++) {
    for (let index = 0; index < inputArray.length; index++) {
      sortTwoElements(inputArray, index)
    }
  }
  return inputArray;
};

const partitionArray = function(inputArray, partitionElement) {
  let partitionedArray = [[], []];
  sortInAscending(inputArray);

  for (let index in inputArray) {
    partitionedArray[1].push(inputArray[index]);
    if (partitionElement >= inputArray[index]) {
      partitionedArray[0].push(inputArray[index]);
      partitionedArray[1].pop();
    }
  }
  return partitionedArray;
};

// exporting all functions
exports.reverseArray = reverseArray;
exports.extractAlternateElements = extractAlternateElements;
exports.mapLengths = mapLengths;
exports.findIndex = findIndex;

exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.extractAllChars = extractAllChars;
exports.isElementExist = isElementExist;

exports.removeDuplicates = removeDuplicates;
exports.unionArrays = unionArrays;
exports.extractIntersections = extractIntersections;
exports.subtractSet = subtractSet;

exports.isArraySubset = isArraySubset;
exports.zipTwoArrays = zipTwoArrays;
exports.rotateArray = rotateArray;
exports.sortInAscending = sortInAscending;
exports.partitionArray = partitionArray;
