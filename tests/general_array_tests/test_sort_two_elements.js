const assert = require("assert");
const {sortTwoElements} = require("../../library/general_array_lib.js");

assert.deepEqual(sortTwoElements([1,2],0),[1,2]);
assert.deepEqual(sortTwoElements([2,1],0),[1,2])
assert.deepEqual(sortTwoElements([2,2,-3,1],1),[2,-3,2,1]);
assert.deepEqual(sortTwoElements([1,2,6,5],2),[1,2,5,6]);
assert.deepEqual(sortTwoElements([9,1.3,2],0),[1.3,9,2]);
assert.deepEqual(sortTwoElements(['b','j','k','a'],2),['b','j','a','k']);
assert.deepEqual(sortTwoElements(['abra','ka','dabra'],1),['abra','dabra','ka']);
