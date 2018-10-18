const assert = require("assert");
const {unionArrays} = require("../../library/general_array_lib.js");

assert.deepEqual(unionArrays([2],[1]),[2,1]);
assert.deepEqual(unionArrays([2,1],[3]),[2,1,3]);
assert.deepEqual(unionArrays([2,4],[3,1]),[2,4,3,1]);
assert.deepEqual(unionArrays([1,2,1],[4,6]),[1,2,4,6]);
assert.deepEqual(unionArrays([1,2,2],[0,3,3]),[1,2,0,3]);
assert.deepEqual(unionArrays([1,2,2],[0,3,3,7]),[1,2,0,3,7]);
assert.deepEqual(unionArrays(['h','e','l','l','o'],['h','e','y']),['h','e','l','o','y']);
assert.deepEqual(unionArrays(['hello','hey','hi','hi'],['hi','hey','hola']),['hello','hey','hi','hola']);
