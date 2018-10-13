const assert = require("assert");
const extractDigits = require("../library/array_lib_16_to_27.js").extractDigits;

assert.deepEqual(extractDigits(2),[2]);
assert.deepEqual(extractDigits(32),[3,2]);
assert.deepEqual(extractDigits(22312313),[2,2,3,1,2,3,1,3]);
assert.deepEqual(extractDigits(1234567890),[1,2,3,4,5,6,7,8,9,0]);
assert.deepEqual(extractDigits(0123456789),[1,2,3,4,5,6,7,8,9]);
