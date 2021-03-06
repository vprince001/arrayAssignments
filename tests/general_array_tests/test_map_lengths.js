const assert = require("assert");
const {mapLengths} = require("../../library/general_array_lib");

assert.deepEqual(mapLengths(['An']), [2]);
assert.deepEqual(mapLengths(['An','apple','a','day']), [2,5,1,3]);
assert.deepEqual(mapLengths([]), []);
assert.deepEqual(mapLengths([12,5435]), [2,4]);
assert.deepEqual(mapLengths(['']), [0]);
assert.deepEqual(mapLengths(['keeps','the','doctor']), [5,3,6]);
assert.deepEqual(mapLengths(['away']), [4]);
assert.deepEqual(mapLengths(['p','4543']), [1,4]);
