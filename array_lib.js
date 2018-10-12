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
  let firstTerm = 0;
  let secondTerm = 1;
  let sum = firstTerm + secondTerm;
  let fibo = [firstTerm];

  for(let term = 1; term < limit; term++){
    fibo[term] = sum;
    sum = firstTerm+secondTerm;
    firstTerm = secondTerm;
    secondTerm = sum;
  }
  return reverseArray(fibo);
}

const findGreatest = function(inputArray){
  let greatestNumber = inputArray[0];

  for(let index = 1; index < inputArray.length; index++){
    if(inputArray[index] > greatestNumber){
      greatestNumber = inputArray[index];
    }
  }
  return greatestNumber;
}

const findLowest = function(inputArray){
  let lowestNumber = inputArray[0];

  for(let index = 1; index < inputArray.length; index++){
    if(inputArray[index] < lowestNumber){
      lowestNumber = inputArray[index];
    }
  }
  return lowestNumber;
}

const calcAverage = function(inputArray){
  let numberOfElements = inputArray.length;
  let average = sumAllElements(inputArray)/numberOfElements;
  return average.toFixed(2);
}

const mapLengths = function(inputArray){
  let mappedArray = [];
  for(index in inputArray){
    mappedArray[index] = inputArray[index].length;
  }
  return mappedArray;
}

exports.extractOdds = extractOdds;
exports.extractEvens = extractEvens;
exports.sumAllElements = sumAllElements;
exports.reverseArray = reverseArray;
exports.extractAlternateElements = extractAlternateElements;
exports.reverseFibo = reverseFibo;
exports.findGreatest = findGreatest;
exports.findLowest = findLowest;
exports.calcAverage = calcAverage;
exports.mapLengths = mapLengths;
