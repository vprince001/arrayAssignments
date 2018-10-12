const extractOdds = function(inputArray){
  let oddArray = [];
  let oddArrayIndex = 0;

  for(let index = 0; index < inputArray.length; index++){
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

  for(let index = 0; index < inputArray.length; index++){
    if(inputArray[index]%2 == 0){
      evenArray[evenArrayIndex] = inputArray[index];
      evenArrayIndex++;
    }
  }
  return evenArray;
}

const sumAllElements = function(inputArray){
  let sum = 0;

  for(let index = 0; index < inputArray.length; index++){
    sum = sum + inputArray[index];
  }
  return sum;
}

const reverseArray = function(inputArray){
  let reversedArray = [];
  let reversedArrayIndex = (inputArray.length) - 1;

  for(let index in inputArray){
    reversedArray[reversedArrayIndex] = inputArray[index];
    reversedArrayIndex--;
  }
  return reversedArray;
}

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

const reverseFibo = function(limit){
  let sum = 0;
  let firstTerm = 0;
  let secondTerm = 1;
  let fibo = [0,1];

  if(limit == 1){
    fibo = [0];
  }

  for(let term = 2; term < limit; term++){
    sum = firstTerm+secondTerm;
    firstTerm = secondTerm;
    secondTerm = sum;
    fibo[term] = sum;
  }
  return reverseArray(fibo);
}

exports.extractOdds = extractOdds;
exports.extractEvens = extractEvens;
exports.sumAllElements = sumAllElements;
exports.reverseArray = reverseArray;
exports.extractAlternateElements = extractAlternateElements;
exports.reverseFibo = reverseFibo;
