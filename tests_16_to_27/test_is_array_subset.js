const assert = require("assert");
const isArraySubset = require("../library/array_lib_16_to_27.js").isArraySubset;

assert.deepEqual(isArraySubset([2],[2]),true);
assert.deepEqual(isArraySubset([2,1],[1]),true);
assert.deepEqual(isArraySubset([2,4],[2,1]),false);
assert.deepEqual(isArraySubset([1,2,1],[4,1,6]),false);
assert.deepEqual(isArraySubset([1,2,2,3],[3,2,2,1]),true);
assert.deepEqual(isArraySubset([1,2,2,7],[0,3,3,7]),false);
