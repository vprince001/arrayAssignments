const assert = require("assert");
const countNumbersAbove = require("../../library/array_lib_1_to_15.js").countNumbersAbove;

assert.equal(countNumbersAbove([2],2),0);
assert.equal(countNumbersAbove([1,2,3],2),1);
assert.equal(countNumbersAbove([0,2],0),1);
assert.equal(countNumbersAbove([1,-5,3],1),1);
assert.equal(countNumbersAbove([1,1],0),2);
assert.equal(countNumbersAbove([3,5,6,2,9,4],4),3);
assert.equal(countNumbersAbove([3.6,5,6,-2,-9,4],4),2);
assert.equal(countNumbersAbove([3,5,6,2,9,4],0),6);
