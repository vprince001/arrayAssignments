const assert = require("assert");
const {reverseFibo} = require("../../library/number_array_lib.js");

assert.deepEqual(reverseFibo(1), [0]);
assert.deepEqual(reverseFibo(2), [1,0]);
assert.deepEqual(reverseFibo(3), [1,1,0]);
assert.deepEqual(reverseFibo(5), [3,2,1,1,0]);
assert.deepEqual(reverseFibo(6), [5,3,2,1,1,0]);
assert.deepEqual(reverseFibo(8), [13,8,5,3,2,1,1,0]);
