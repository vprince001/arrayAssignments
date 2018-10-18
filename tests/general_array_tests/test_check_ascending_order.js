const assert = require("assert");
const {checkAscendingOrder} = require("../../library/general_array_lib.js");

assert.equal(checkAscendingOrder([2]),true);
assert.equal(checkAscendingOrder([1,2]),true);
assert.equal(checkAscendingOrder([2,2,3,1,2,3,1]),false);
assert.equal(checkAscendingOrder([1,2,3,6,7,8,9]),true);
assert.equal(checkAscendingOrder([1,2,5,6,7,6,8,9,0]),false);
assert.equal(checkAscendingOrder([1.3,2,3.34,4,5,6.32,7,8,9]),true);
assert.equal(checkAscendingOrder(['a','b','c','d','e','f','g','h']),true);
assert.equal(checkAscendingOrder(['abra','ka','dabra']),false);
