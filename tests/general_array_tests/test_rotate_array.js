const assert = require("assert");
const {rotateArray} = require("../../library/general_array_lib.js");

assert.deepEqual(rotateArray([1,2],1),[2,1]);
assert.deepEqual(rotateArray([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotateArray([3,2,4],2),[4,3,2]);
assert.deepEqual(rotateArray([2,2,3,1,2],3),[1,2,2,2,3]);
assert.deepEqual(rotateArray([1,2,3,4,1],1),[2,3,4,1,1]);
assert.deepEqual(rotateArray(['This','is','the','best','code'],2),['the','best','code','This','is']);
