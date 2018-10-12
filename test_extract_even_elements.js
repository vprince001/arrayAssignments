const assert = require("assert");
const extractEvens = require("./array_lib.js").extractEvens;
let input, expectedOutput;

assert.deepEqual(extractEvens([2]),[2]);
assert.deepEqual(extractEvens([1,2,3]),[2]);
assert.deepEqual(extractEvens([0,2]),[0,2]);
assert.deepEqual(extractEvens([1]),[]);
assert.deepEqual(extractEvens([1,1]),[]);
assert.deepEqual(extractEvens([3,5,6,2,9,4]),[6,2,4]);
