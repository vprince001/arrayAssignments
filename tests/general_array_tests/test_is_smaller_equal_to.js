const assert = require("assert");
const {isSmallerEqualTo} = require("../../library/general_array_lib.js");

assert.deepEqual(isSmallerEqualTo(1,2),true);
assert.deepEqual(isSmallerEqualTo(4,2),false);
assert.deepEqual(isSmallerEqualTo(3,0),false);
assert.deepEqual(isSmallerEqualTo(-5,0),true);
assert.deepEqual(isSmallerEqualTo('g','b'),false);
