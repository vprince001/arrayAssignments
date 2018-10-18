const assert = require("assert");
const {removeDuplicates} = require("../../library/general_array_lib.js");

assert.deepEqual(removeDuplicates([2]),[2]);
assert.deepEqual(removeDuplicates([3,2]),[3,2]);
assert.deepEqual(removeDuplicates([2,2,3,1,2,3,1,3]),[2,3,1]);
assert.deepEqual(removeDuplicates([1,2,1,4,2,6,4,8,6,0]),[1,2,4,6,8,0]);
assert.deepEqual(removeDuplicates([0,1,2,2,Infinity]),[0,1,2,Infinity]);
assert.deepEqual(removeDuplicates(['a','b','c','a','d','b','a','f','g']),['a','b','c','d','f','g']);
assert.deepEqual(removeDuplicates(['abcde','abc','abc','hello']),['abcde','abc','hello']);
