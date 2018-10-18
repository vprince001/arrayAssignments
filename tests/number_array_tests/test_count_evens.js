const assert = require("assert");
const {countEvens} = require("../../library/number_array_lib.js");

assert.equal(countEvens([2]),1);
assert.equal(countEvens([1,2,3]),1);
assert.equal(countEvens([0,2]),2);
assert.equal(countEvens([1,-5]),0);
assert.equal(countEvens([1,1]),0);
assert.equal(countEvens([3,5,6,2,9,4]),3);
