const assert = require("assert");
const {addTwoNumbers} = require("../../library/number_array_lib.js");

assert.deepEqual(addTwoNumbers(1,1),2);
assert.deepEqual(addTwoNumbers(0,2),2);
assert.deepEqual(addTwoNumbers(1,-5),-4);
assert.deepEqual(addTwoNumbers(-2,3),1);
assert.deepEqual(addTwoNumbers(6,9),15);
