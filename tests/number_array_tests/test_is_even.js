const assert = require("assert");
const {isEven} = require("../../library/number_array_lib.js");

assert.equal(isEven(2),true);
assert.equal(isEven(0),true);
assert.equal(isEven(1),false);
assert.equal(isEven(3),false);
assert.equal(isEven(-6),true);
