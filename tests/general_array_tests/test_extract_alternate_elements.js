const assert = require("assert");
const {extractAlternateElements} = require("../../library/general_array_lib.js");

assert.deepEqual(extractAlternateElements([1]), [1]);
assert.deepEqual(extractAlternateElements([2]), [2]);
assert.deepEqual(extractAlternateElements([1,2,3]), [1,3]);
assert.deepEqual(extractAlternateElements([0,1]), [0]);
assert.deepEqual(extractAlternateElements([2,2]), [2]);
assert.deepEqual(extractAlternateElements([3,5,-6,2,9.34,4]), [3,-6,9.34]);
assert.deepEqual(extractAlternateElements(["little","things","matters","a","lot"]),['little',"matters","lot"]);
