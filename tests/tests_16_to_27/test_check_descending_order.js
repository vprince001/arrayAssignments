const assert = require("assert");
const checkDescendingOrder = require("../../library/array_lib_16_to_27.js").checkDescendingOrder;

assert.equal(checkDescendingOrder([2]),true);
assert.equal(checkDescendingOrder([2,1]),true);
assert.equal(checkDescendingOrder([2,2,3,1,2,3,1]),false);
assert.equal(checkDescendingOrder([9,8,7,6,5,4,3,2,1]),true);
assert.equal(checkDescendingOrder([1,2,3,4,5,6,7,6,8,9,0]),false);
assert.equal(checkDescendingOrder([9,8,8,7,6.32,6,5,4,3.34,3,2,1.3,0]),true);
