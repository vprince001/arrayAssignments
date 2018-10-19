const assert = require("assert");
const {subtractSet} = require("../../library/general_array_lib.js");

assert.deepEqual(subtractSet([2],[1]),[2]);
assert.deepEqual(subtractSet([2,1],[1]),[2]);
assert.deepEqual(subtractSet([2,4],[2,1]),[4]);
assert.deepEqual(subtractSet([1,2,1],[4,1,6]),[2]);
assert.deepEqual(subtractSet([1,2,2,3],[0,3,3,2,1]),[]);
assert.deepEqual(subtractSet([1,2,2,7],[0,3,3,7]),[1,2,2]);
assert.deepEqual(subtractSet(['my','name','is','Prince'],['my','name','is','Dheeraj']),['Prince']);
