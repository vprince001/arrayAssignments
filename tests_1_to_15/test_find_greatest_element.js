const assert = require("assert");
const findGreatest = require("../library/array_lib_1_to_15.js").findGreatest;

assert.equal(findGreatest([2]),2);
assert.equal(findGreatest([1,2,3]),3);
assert.equal(findGreatest([0,2]),2);
assert.equal(findGreatest([1,-5]),1);
assert.equal(findGreatest([1,1]),1);
assert.equal(findGreatest([3,5,6,2,9,4]),9);
