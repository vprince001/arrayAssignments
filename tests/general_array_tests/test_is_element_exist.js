const assert = require("assert");
const {isElementExist} = require("../../library/general_array_lib.js");

assert.equal(isElementExist([2],2),true);
assert.equal(isElementExist([1,2],1),true);
assert.equal(isElementExist([2,1],3),false)
assert.equal(isElementExist([1,2,-3],-3),true);
assert.equal(isElementExist([1,2,0],0),true);
assert.equal(isElementExist([1.3,2,6.32],6.32),true);
assert.equal(isElementExist(['a','b','c','d'],'b'),true);
assert.equal(isElementExist(['abra','ka','dabra'],'dab'),false);
