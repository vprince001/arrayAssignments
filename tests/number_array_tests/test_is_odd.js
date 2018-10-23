const assert = require("assert");
const {isOdd} = require("../../library/number_array_lib.js");

assert.equal(isOdd(1),true);
assert.equal(isOdd(2),false);
assert.equal(isOdd(0),false);
assert.equal(isOdd(-5),true);
