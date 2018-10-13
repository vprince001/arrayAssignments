const assert = require("assert");
const calcAverage = require("../library/array_lib_1_to_15.js").calcAverage;

assert.equal(calcAverage([2]),2);
assert.equal(calcAverage([1,2,3]),2);
assert.equal(calcAverage([0,2]),1);
assert.equal(calcAverage([1,-5]),-2);
assert.equal(calcAverage([1,1]),1);
assert.equal(calcAverage([3,5,6,2,9,4]),4.83);
