const assert = require("assert");
const {extractIntersections} = require("../../library/general_array_lib.js");

assert.deepEqual(extractIntersections([2],[2]),[2]);
assert.deepEqual(extractIntersections([2,1],[1]),[1]);
assert.deepEqual(extractIntersections([2,4],[2,1]),[2]);
assert.deepEqual(extractIntersections([1,2,1],[4,1,6]),[1]);
assert.deepEqual(extractIntersections([1,2,2,3],[0,3,3,2,1]),[1,2,3]);
assert.deepEqual(extractIntersections([1,2,2,7],[0,3,3,7]),[7]);
assert.deepEqual(extractIntersections(["my","name",'is',"Prince"],["my","name","is","Dheeraj"]),["my","name","is"]);
