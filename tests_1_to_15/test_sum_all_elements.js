const assert = require("assert");
const sumAllElements = require("../library/array_lib_1_to_15.js").sumAllElements;

assert.deepEqual(sumAllElements([2]),2);
assert.deepEqual(sumAllElements([1,2,3]),6);
assert.deepEqual(sumAllElements([0,2]),2);
assert.deepEqual(sumAllElements([1,-5]),-4);
assert.deepEqual(sumAllElements([1,1]),2);
assert.deepEqual(sumAllElements([3,5,6,2,9,4]),29);
