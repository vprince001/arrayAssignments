const assert = require("assert");
const {isGreaterEqualTo} = require("../../library/general_array_lib.js");

assert.deepEqual(isGreaterEqualTo(2,1),true);
assert.deepEqual(isGreaterEqualTo(2,4),false);
assert.deepEqual(isGreaterEqualTo(0,3),false);
assert.deepEqual(isGreaterEqualTo(0,-5),true);
assert.deepEqual(isGreaterEqualTo('g','b'),true);
