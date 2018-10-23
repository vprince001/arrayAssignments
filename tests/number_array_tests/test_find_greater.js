const assert = require("assert");
const {findGreater} = require("../../library/number_array_lib.js");

assert.equal(findGreater(1,2),2);
assert.equal(findGreater(0,2),2);
assert.equal(findGreater(1,-5),1);
assert.equal(findGreater(-3,2),2);
assert.equal(findGreater(1,1),1);
