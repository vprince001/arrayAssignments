const assert = require("assert");
const checkAscendingOrder = require("../library/array_lib_16_to_27.js").checkAscendingOrder;

assert.equal(checkAscendingOrder([2]),true);
assert.equal(checkAscendingOrder([1,2]),true);
assert.equal(checkAscendingOrder([2,2,3,1,2,3,1]),false);
assert.equal(checkAscendingOrder([1,2,3,4,5,6,7,8,9]),true);
assert.equal(checkAscendingOrder([1,2,3,4,5,6,7,6,8,9,0]),false);
assert.equal(checkAscendingOrder([1.3,2,3.34,4,5,6.32,7,6,8,9,0]),false);
