/* this function will check that 
 * given number is odd or not */
const isNumberOdd = function(number){
  isOdd = false;
  if(number%2 != 0){
    isOdd = true;
  }
  return isOdd;
}

/* this function will return an array of 
 * all odd numbers from a given array */
const extractOdds = function(inputArray){
  let oddArray = [];
  let index = 0;

  for(let element of inputArray){
    if(isNumberOdd(element)){
      oddArray[index] = element;
      index++;
    }
  }
  return oddArray;
}

/* this function will return an array of 
 * all even numbers from a given array */
const extractEvens = function(inputArray){
  let evenArray = [];
  let index = 0;

  for(let element of inputArray){
    if(!isNumberOdd(element)){
      evenArray[index] = element;
      index++;
    }
  }
  return evenArray;
}

/* this function will return the sum of 
 * all numbers from a given array */
const sumAllElements = function(inputArray){
  let sum = 0;

  for(let index = 0; index < inputArray.length; index++){
    sum = sum + inputArray[index];
  }
  return sum;
}

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

/* this function will return an array consisting 
 * a reverse fibonacci series till a given limit */
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

/* this function will return the greatest number
 * from a given array */
const findGreatest = function(inputArray){
  let greatestNumber = inputArray[0];

  for(let index = 0; index < inputArray.length-1; index++){
    greatestNumber = Math.max(greatestNumber, inputArray[index+1]);
  }
  return greatestNumber;
}

/* this function will return the lowest number
 * from a given array */
const findLowest = function(inputArray){
  let lowestNumber = inputArray[0];

  for(let index = 0; index < inputArray.length-1; index++){
    lowestNumber = Math.min(lowestNumber, inputArray[index+1]);
  }
  return lowestNumber;
}

/* this array will calculate the average of
   all numbers from a given array */
const calcAverage = function(inputArray){
  let numberOfElements = inputArray.length;
  let average = sumAllElements(inputArray)/numberOfElements;
  return average.toFixed(2);
}

/* this array will return an array of 
   length of all elements from a given array */
const mapLengths = function(inputArray){
  let mappedArray = [];
  for(index in inputArray){
    mappedArray[index] = inputArray[index].length;
  }
  return mappedArray;
}

/* this array will return the count of
   all odd numbers from a given array */
const countOdds = function(inputArray){
  return extractOdds(inputArray).length;
}

/* this array will return the count of
   all even numbers from a given array */
const countEvens = function(inputArray){
  return extractEvens(inputArray).length;
}

/* this array will return the count of
   numbers above the given threshold from a given array */
const countNumbersAbove = function(inputArray,threshold){
  let count = 0;
  for(let element of inputArray){
    if(element > threshold){
      count++;
    }
  }
  return count;
}

/* this array will return the count of
   numbers below the given threshold from a given array */
const countNumbersBelow = function(inputArray,threshold){
  let count = 0;
  for(let element of inputArray){
    if(element < threshold){
      count++;
    }
  }
  return count;
}

// exporting all functions
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
