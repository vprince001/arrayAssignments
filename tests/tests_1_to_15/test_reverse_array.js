const assert = require("assert");
const reverseArray = require("../../library/array_lib_1_to_15.js").reverseArray;

assert.deepEqual(reverseArray([1]), [1]);
assert.deepEqual(reverseArray([1,2,3]), [3,2,1]);
assert.deepEqual(reverseArray([0,1]), [1,0]);
assert.deepEqual(reverseArray([1,-2]), [-2,1]);
assert.deepEqual(reverseArray([2,2]), [2,2]);
assert.deepEqual(reverseArray([3,5,6,2,9,4]), [4,9,2,6,5,3]);
