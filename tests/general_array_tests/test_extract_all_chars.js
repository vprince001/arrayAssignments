const assert = require("assert");
const {extractAllChars} = require("../../library/general_array_lib.js");

assert.deepEqual(extractAllChars(2),[2]);
assert.deepEqual(extractAllChars(32),[3,2]);
assert.deepEqual(extractAllChars(2231),[2,2,3,1]);
assert.deepEqual(extractAllChars(1245780),[1,2,4,5,7,8,0]);
assert.deepEqual(extractAllChars(0235689),[2,3,5,6,8,9]);
assert.deepEqual(extractAllChars("prince"),['p','r','i','n','c','e']);
assert.deepEqual(extractAllChars("JS is cool"),['J','S',' ','i','s',' ','c','o','o','l']);
