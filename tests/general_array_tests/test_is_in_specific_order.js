const assert = require("assert");
const {isSmallerEqualTo,isGreaterEqualTo,isInSpecificOrder} = require("../../library/general_array_lib.js");

//--------------------isSmallerEqualTo--------------------
assert.equal(isInSpecificOrder([2],isSmallerEqualTo),true);
assert.equal(isInSpecificOrder([1,2],isSmallerEqualTo),true);
assert.equal(isInSpecificOrder([2,1],isSmallerEqualTo),false)
assert.equal(isInSpecificOrder([2,2,-3,1,2,1,3],isSmallerEqualTo),false);
assert.equal(isInSpecificOrder([1,2,3,6,7,8,9],isSmallerEqualTo),true);
assert.equal(isInSpecificOrder([1,2,-3,6,7,8,9],isSmallerEqualTo),false);
assert.equal(isInSpecificOrder([1,2,5,6,7,6,8,9,0],isSmallerEqualTo),false);
assert.equal(isInSpecificOrder([1.3,2,3.34,4,5,6.32,7,8,9],isSmallerEqualTo),true);
assert.equal(isInSpecificOrder(['a','b','c','d','e','f','g','h'],isSmallerEqualTo),true);
assert.equal(isInSpecificOrder(['abra','ka','dabra'],isSmallerEqualTo),false);

//--------------------isGreaterEqualTo--------------------
assert.equal(isInSpecificOrder([2],isGreaterEqualTo),true);
assert.equal(isInSpecificOrder([2,1],isGreaterEqualTo),true);
assert.equal(isInSpecificOrder([1,2],isGreaterEqualTo),false)
assert.equal(isInSpecificOrder([2,2,-3,1,2,1,3],isGreaterEqualTo),false);
assert.equal(isInSpecificOrder([1,2,3,6,7,8,9],isGreaterEqualTo),false);
assert.equal(isInSpecificOrder([9,8,7,6,5,4,3,2,1],isGreaterEqualTo),true);
assert.equal(isInSpecificOrder([1,2,-3,6,7,8,9],isGreaterEqualTo),false);
assert.equal(isInSpecificOrder([0,9,8,7,6,5,4,3,2,1],isGreaterEqualTo),false);
assert.equal(isInSpecificOrder([9,8,7,6.32,5,4,3.34,2,1.3],isGreaterEqualTo),true);
assert.equal(isInSpecificOrder(['g','f','e','d','c','b','a'],isGreaterEqualTo),true);
assert.equal(isInSpecificOrder(['dabra','ka','abra'],isGreaterEqualTo),false);
