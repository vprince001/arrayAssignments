const assert = require("assert");
const countOdds = require("../../library/array_lib_1_to_15.js").countOdds;

assert.equal(countOdds([2]),0);
assert.equal(countOdds([1,2,3]),2);
assert.equal(countOdds([0,2]),0);
assert.equal(countOdds([1,-5]),2);
assert.equal(countOdds([1,1]),2);
assert.equal(countOdds([3,5,6,2,9,4]),3);
