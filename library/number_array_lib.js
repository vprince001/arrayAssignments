let {reverseArray} = require("./general_array_lib.js");

/* this function will check that 
 * given number is odd or not */
const isOdd = function(number){
  return Math.abs(number%2 == 1);
}

/* this function will return an array of 
 * all odd numbers from a given array */
const extractOdds = function(inputArray){
  return inputArray.filter(isOdd);
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

/* this function will check if first number 
 * is greater than second number or not. */
const isNumberGreater = function(firstNumber, secondNumber){
  isGreater = false;

  if(firstNumber > secondNumber){
    isGreater = true;
  }
  return isGreater;
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


//exporting all functions
exports.extractOdds = extractOdds;
exports.extractEvens = extractEvens;
exports.sumAllElements = sumAllElements;
exports.reverseFibo = reverseFibo;
exports.findGreatest = findGreatest;
exports.findLowest = findLowest;
exports.calcAverage = calcAverage;
exports.countOdds = countOdds;
exports.countEvens = countEvens;
exports.countNumbersAbove = countNumbersAbove;
exports.countNumbersBelow = countNumbersBelow;
