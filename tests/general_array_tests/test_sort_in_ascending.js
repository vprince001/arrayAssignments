const assert = require("assert");
const {sortInAscending} = require("../../library/general_array_lib.js");

assert.deepEqual(sortInAscending([2]),[2]);
assert.deepEqual(sortInAscending([1,2]),[1,2]);
assert.deepEqual(sortInAscending([2,1]),[1,2])
assert.deepEqual(sortInAscending([2,2,-3,1,2,1,3]),[-3,1,1,2,2,2,3]);
assert.deepEqual(sortInAscending([1,2,5,6,7,6,8,9,0]),[0,1,2,5,6,6,7,8,9]);
assert.deepEqual(sortInAscending([9,1.3,2,4.21,3.34,7,4,6.32]),[1.3,2,3.34,4,4.21,6.32,7,9]);
assert.deepEqual(sortInAscending(['b','j','k','a','d','i']),['a','b','d','i','j','k']);
assert.deepEqual(sortInAscending(['abra','ka','dabra']),['abra','dabra','ka']);
