const assert = require("assert");
const {extractOdds} = require("../../library/number_array_lib.js");

assert.deepEqual(extractOdds([1]), [1]);
assert.deepEqual(extractOdds([1,2,3]), [1,3]);
assert.deepEqual(extractOdds([0,1]), [1]);
assert.deepEqual(extractOdds([2]), []);
assert.deepEqual(extractOdds([2,2]), []);
assert.deepEqual(extractOdds([3,5,6,2,9,4]), [3,5,9]);
