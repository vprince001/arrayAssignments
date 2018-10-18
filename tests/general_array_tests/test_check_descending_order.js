const assert = require("assert");
const {checkDescendingOrder} = require("../../library/general_array_lib.js");

assert.equal(checkDescendingOrder([2]),true);
assert.equal(checkDescendingOrder([2,1]),true);
assert.equal(checkDescendingOrder([2,2,3,3,1]),false);
assert.equal(checkDescendingOrder([6,5,4,3,2,1]),true);
assert.equal(checkDescendingOrder([1,2,7,6,8,9,0]),false);
assert.equal(checkDescendingOrder([9,8,8,7,6.32,6,5,4,3.34,3,2,1.3,0]),true);
assert.equal(checkDescendingOrder(['g','f','e','d','c','b','a']),true);
assert.equal(checkDescendingOrder(['abra','ka','dabra']),false);
