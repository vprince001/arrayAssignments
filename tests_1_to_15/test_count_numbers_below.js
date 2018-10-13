const assert = require("assert");
const countNumbersBelow = require("../library/array_lib_1_to_15.js").countNumbersBelow;

assert.equal(countNumbersBelow([2],2),0);
assert.equal(countNumbersBelow([1,2,3],2),1);
assert.equal(countNumbersBelow([0,2],2),1);
assert.equal(countNumbersBelow([1,-5,3],3),2);
assert.equal(countNumbersBelow([1,1],1),0);
assert.equal(countNumbersBelow([3,5,6,2,9,4],4),2);
assert.equal(countNumbersBelow([3.6,5,6,-2,-9,4],4),3);
assert.equal(countNumbersBelow([3,5,6,2,9,4],10),6);
