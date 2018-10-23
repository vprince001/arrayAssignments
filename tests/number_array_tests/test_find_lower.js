const assert = require("assert");
const {findLower} = require("../../library/number_array_lib.js");

assert.equal(findLower(1,2),1);
assert.equal(findLower(0,2),0);
assert.equal(findLower(1,-5),-5);
assert.equal(findLower(-3,2),-3);
assert.equal(findLower(1,1),1);
