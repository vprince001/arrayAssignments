const assert = require("assert");
const extractAlternateElements = require("../../library/array_lib_1_to_15.js").extractAlternateElements;

assert.deepEqual(extractAlternateElements([1]), [1]);
assert.deepEqual(extractAlternateElements([1,2,3]), [1,3]);
assert.deepEqual(extractAlternateElements([0,1]), [0]);
assert.deepEqual(extractAlternateElements([2]), [2]);
assert.deepEqual(extractAlternateElements([2,2]), [2]);
assert.deepEqual(extractAlternateElements([3,5,6,2,9,4]), [3,6,9]);
assert.deepEqual(extractAlternateElements(['p',-5,6,2.4,-9,4,8.5]), ['p',6,-9,8.5]);
