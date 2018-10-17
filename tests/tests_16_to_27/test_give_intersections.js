const assert = require("assert");
const giveIntersections = require("../../library/array_lib_16_to_27.js").giveIntersections;

assert.deepEqual(giveIntersections([2],[2]),[2]);
assert.deepEqual(giveIntersections([2,1],[1]),[1]);
assert.deepEqual(giveIntersections([2,4],[2,1]),[2]);
assert.deepEqual(giveIntersections([1,2,1],[4,1,6]),[1]);
assert.deepEqual(giveIntersections([1,2,2,3],[0,3,3,2,1]),[1,2,3]);
assert.deepEqual(giveIntersections([1,2,2,7],[0,3,3,7]),[7]);
assert.deepEqual(giveIntersections(["my","name",'is',"Prince"],["my","name","is","Dheeraj"]),["my","name","is"]);
