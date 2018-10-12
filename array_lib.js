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

exports.extractOdds = extractOdds;
exports.extractEvens = extractEvens;
exports.sumAllElements = sumAllElements;
