const assert = require("assert");
const {findIndex} = require("../../library/general_array_lib.js");

assert.equal(findIndex([2],2),0);
assert.equal(findIndex([3,2],2),1);
assert.equal(findIndex([2,2,3,1,-2],3),2);
assert.equal(findIndex([1,2,3,-6,7,6],6),5);
assert.equal(findIndex([1,2,3,6,7,-6,8,0],-6),5);
assert.equal(findIndex([1.3,2,3.34,4,6.32,7,6.54,8,0],6.54),6);
assert.equal(findIndex([1.3,"pri",3.34,5,"prince",6.32],"prince"),4);
