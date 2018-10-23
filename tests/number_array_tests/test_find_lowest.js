const assert = require("assert");
const {findLowest} = require("../../library/number_array_lib.js");

assert.equal(findLowest([2]),2);
assert.equal(findLowest([1,2,3]),1);
assert.equal(findLowest([0,2]),0);
assert.equal(findLowest([1,-5]),-5);
assert.equal(findLowest([1,1]),1);
assert.equal(findLowest([3,5,6,2,9,4]),2);
