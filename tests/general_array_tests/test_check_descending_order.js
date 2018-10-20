const assert = require("assert");
const {isDescending} = require("../../library/general_array_lib.js");

assert.equal(isDescending([2]),true);
assert.equal(isDescending([2,1]),true);
assert.equal(isDescending([2,2,3,3,1]),false);
assert.equal(isDescending([6,5,4,3,2,1]),true);
assert.equal(isDescending([1,2,7,6,8,9,0]),false);
assert.equal(isDescending([9,8,8,7,6.32,6,5,4,3.34,3,2,1.3,0]),true);
assert.equal(isDescending(['g','f','e','d','c','b','a']),true);
assert.equal(isDescending(['abra','ka','dabra']),false);
