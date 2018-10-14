const assert = require("assert");
const extractUniqueFromFirst = require("../library/array_lib_16_to_27.js").extractUniqueFromFirst;

assert.deepEqual(extractUniqueFromFirst([2],[1]),[2]);
assert.deepEqual(extractUniqueFromFirst([2,1],[1]),[2]);
assert.deepEqual(extractUniqueFromFirst([2,4],[2,1]),[4]);
assert.deepEqual(extractUniqueFromFirst([1,2,1],[4,1,6]),[2]);
assert.deepEqual(extractUniqueFromFirst([1,2,2,3],[0,3,3,2,1]),[]);
assert.deepEqual(extractUniqueFromFirst([1,2,2,7],[0,3,3,7]),[1,2,2]);
