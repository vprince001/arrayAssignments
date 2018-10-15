//this function will return an array of 
//all odd numbers from a given array
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

//this function will return an array of 
//all even numbers from a given array
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

//this function will return the sum of 
//all numbers from a given array
const sumAllElements = function(inputArray){
  let sum = 0;

  for(let index = 0; index < inputArray.length; index++){
    sum = sum + inputArray[index];
  }
  return sum;
}

//this function will return a reverse array
//from a given array
const reverseArray = function(inputArray){
  let reversedArray = [];
  let reversedArrayIndex = (inputArray.length) - 1;

  for(let index in inputArray){
    reversedArray[reversedArrayIndex] = inputArray[index];
    reversedArrayIndex--;
  }
  return reversedArray;
}

//this function will return an array of
//all alternate elements from a given array
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

//this function will return an array consisting 
//a reverse fibonacci series till a given limit
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

//this function will return the greatest number
//from a given array
const findGreatest = function(inputArray){
  let greatestNumber = inputArray[0];

  for(let index = 1; index < inputArray.length; index++){
    if(inputArray[index] > greatestNumber){
      greatestNumber = inputArray[index];
    }
  }
  return greatestNumber;
}

//this function will return the lowest number
//from a given array
const findLowest = function(inputArray){
  let lowestNumber = inputArray[0];

  for(let index = 1; index < inputArray.length; index++){
    if(inputArray[index] < lowestNumber){
      lowestNumber = inputArray[index];
    }
  }
  return lowestNumber;
}

//this array will calculate the average of
//all numbers from a given array
const calcAverage = function(inputArray){
  let numberOfElements = inputArray.length;
  let average = sumAllElements(inputArray)/numberOfElements;
  return average.toFixed(2);
}

//this array will return an array of 
//length of all elements from a given array
const mapLengths = function(inputArray){
  let mappedArray = [];
  for(index in inputArray){
    mappedArray[index] = inputArray[index].length;
  }
  return mappedArray;
}

//this array will return the count of
//all odd numbers from a given array
const countOdds = function(inputArray){
  return extractOdds(inputArray).length;
}

//this array will return the count of
//all even numbers from a given array
const countEvens = function(inputArray){
  return extractEvens(inputArray).length;
}

//this array will return the count of
//numbers above the given threshold from a given array
const countNumbersAbove = function(inputArray,threshold){
  let count = 0;
  for(let index in inputArray){
    if(inputArray[index] > threshold){
      count++;
    }
  }
  return count;
}

//this array will return the count of
//numbers below the given threshold from a given array
const countNumbersBelow = function(inputArray,threshold){
  let count = 0;
  for(let index in inputArray){
    if(inputArray[index] < threshold){
      count++;
    }
  }
  return count;
}

//exporting all functions
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
exports.countOdds = countOdds;
exports.countEvens = countEvens;
exports.countNumbersAbove = countNumbersAbove;
exports.countNumbersBelow = countNumbersBelow;
