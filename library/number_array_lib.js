let {reverseArray} = require("./general_array_lib.js");

const isOdd = function(number) {
  return (Math.abs(number)%2 == 1);
};

const isEven = function(number) {
  return (number%2 == 0);
};

const extractOdds = function(inputArray) {
  return inputArray.filter(isOdd);
};

const extractEvens = function(inputArray) {
  return inputArray.filter(isEven);
};

const addTwoNumbers = function(firstNum,secondNum) {
  return firstNum + secondNum;
};

const sumAllElements = function(inputArray) {
  return inputArray.reduce(addTwoNumbers);
};

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

const findGreater = function(firstNum, secondNum) {
  return Math.max(firstNum, secondNum);
}

const findGreatest = function(inputArray) {
  return inputArray.reduce(findGreater);
}

const findLower = function(firstNum, secondNum) {
  return Math.min(firstNum, secondNum);
}

const findLowest = function(inputArray){
  return inputArray.reduce(findLower);
}

const calcAverage = function(inputArray){
  return (sumAllElements(inputArray)/inputArray.length).toFixed(2);
}

const countOdds = function(inputArray){
  return extractOdds(inputArray).length;
}

const countEvens = function(inputArray){
  return extractEvens(inputArray).length;
}

const countNumbersAbove = function(inputArray,threshold){
  const extractGreaters = function(number) {
    return number > threshold;
  }
  return inputArray.filter(extractGreaters).length;
}

const countNumbersBelow = function(inputArray,threshold){
  const extractLowers = function(number) {
    return number < threshold;
  }
  return inputArray.filter(extractLowers).length;
}

//exporting all functions
exports.isOdd = isOdd;
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
