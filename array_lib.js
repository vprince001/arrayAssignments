const extractOdds = function(inputArray){
  let oddArray = [];
  let oddArrayIndex = 0;

  for(index = 0; index < inputArray.length; index++){
    if(inputArray[index]%2 != 0){
      oddArray[oddArrayIndex] = inputArray[index];
      oddArrayIndex++;
    }
  }
  return oddArray;
}

const extractEvens = function(inputArray){
  let evenArray = [];
  let evenArrayIndex = 0;

  for(index = 0; index < inputArray.length; index++){
    if(inputArray[index]%2 == 0){
      evenArray[evenArrayIndex] = inputArray[index];
      evenArrayIndex++;
    }
  }
  return evenArray;
}

const sumAllElements = function(inputArray){
  let sum = 0;

  for(index = 0; index < inputArray.length; index++){
    sum = sum + inputArray[index];
  }
  return sum;
}

const reverseArray = function(inputArray){
  let reversedArray = [];
  let reversedArrayIndex = (inputArray.length) - 1;

  for(index in inputArray){
    reversedArray[reversedArrayIndex] = inputArray[index];
    reversedArrayIndex--;
  }
  return reversedArray;
}

const extractAlternateElements = function(inputArray){
  let filteredArray = [];
  let filteredArrayIndex = 0;

  for(index = 0; index < inputArray.length; index++){
    filteredArray[filteredArrayIndex] = inputArray[index];
    filteredArrayIndex++;
    index++;
  }
  return filteredArray;
}

exports.extractOdds = extractOdds;
exports.extractEvens = extractEvens;
exports.sumAllElements = sumAllElements;
exports.reverseArray = reverseArray;
exports.extractAlternateElements = extractAlternateElements;
