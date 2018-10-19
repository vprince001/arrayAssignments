let {reverseArray} = require("./general_array_lib.js");

/* this function will check that 
 * given number is odd or not */
const isOdd = function(number) {
  return (Math.abs(number)%2 == 1);
};

/* this function will check that 
 * given number is even or not */
const isEven = function(number) {
  return (number%2 == 0);
};

/* this function will return an array of 
 * all odd numbers from a given array */
const extractOdds = function(inputArray) {
  return inputArray.filter(isOdd);
};

/* this function will return an array of 
 * all even numbers from a given array */
const extractEvens = function(inputArray) {
  return inputArray.filter(isEven);
};

/* this function will return the sum of 
 * two given numbers */
const addTwoNumbers = function(firstNum,secondNum) {
  return firstNum + secondNum;
};

/* this function will return the sum of 
 * all numbers from a given array */
const sumAllElements = function(inputArray) {
  return inputArray.reduce(addTwoNumbers);
};

/* this function will return an array consisting 
 * a reverse fibonacci series till a given limit */
const reverseFibo = function(limit) {
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
};

/* this function will return the greatest number
 * from a given array */
const findGreatest = function(inputArray) {
  return inputArray.reduce(function(a,b) {
    return Math.max(a,b);
  });
}

/* this function will return the lowest number
 * from a given array */
const findLowest = function(inputArray){
  return inputArray.reduce(function(a,b) {
    return Math.min(a,b);
  }); 
}

/* this array will calculate the average of
   all numbers from a given array */
const calcAverage = function(inputArray){
  return (sumAllElements(inputArray)/inputArray.length).toFixed(2);
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
  let numbersAbove = inputArray.filter(function(a) {
  return a > threshold;
  });
  return numbersAbove.length;
}

/* this array will return the count of
   numbers below the given threshold from a given array */
const countNumbersBelow = function(inputArray,threshold){
  let numbersBelow = inputArray.filter(function(a) {
  return a < threshold;
  });
  return numbersBelow.length;
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
