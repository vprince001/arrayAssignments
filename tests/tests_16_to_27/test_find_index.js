const assert = require("assert");
const findIndex = require("../../library/array_lib_16_to_27.js").findIndex;

assert.equal(findIndex([2],2),0);
assert.equal(findIndex([3,2],2),1);
assert.equal(findIndex([2,2,3,1,2,3,1],3),2);
assert.equal(findIndex([1,2,3,4,5,6,7,6,8,9,0],6),5);
assert.equal(findIndex([1,2,3,4,5,6,7,6,8,9,0],6),5);
assert.equal(findIndex([1.3,2,3.34,4,5,6.32,7,6,8,9,0],6),7);
