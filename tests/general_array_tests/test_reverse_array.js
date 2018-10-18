const assert = require("assert");
const {reverseArray} = require("../../library/general_array_lib.js");

assert.deepEqual(reverseArray([1]), [1]);
assert.deepEqual(reverseArray([1,2,3]), [3,2,1]);
assert.deepEqual(reverseArray([0,1]), [1,0]);
assert.deepEqual(reverseArray([1,-2]), [-2,1]);
assert.deepEqual(reverseArray([2,2]), [2,2]);
assert.deepEqual(reverseArray(["change","is","hard"]), ["hard","is","change"]);
