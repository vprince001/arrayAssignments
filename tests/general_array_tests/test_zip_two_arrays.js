const assert = require("assert");
const {zipTwoArrays} = require("../../library/general_array_lib.js");

assert.deepEqual(zipTwoArrays([2],[2]),[ [2,2] ]);
assert.deepEqual(zipTwoArrays([2,1],[1,2]),[ [2,1],[1,2] ]);
assert.deepEqual(zipTwoArrays([2,4],[1]),[ [2,1] ]);
assert.deepEqual(zipTwoArrays([1,2,1],[4,1,6]),[ [1,4],[2,1],[1,6] ]);
assert.deepEqual(zipTwoArrays([1,2,2],[0,3,3,2]),[ [1,0],[2,3],[2,3] ]);
assert.deepEqual(zipTwoArrays([1,2,2,7],[0,3,3,7]),[ [1,0], [2,3], [2,3], [7,7] ]);
assert.deepEqual(zipTwoArrays([1,2,2,7],[0,3,3,7]),[ [1,0], [2,3], [2,3], [7,7] ]);
assert.deepEqual(zipTwoArrays(['my','name','is','Prince'],['my','name','is','Dheeraj']),[ ['my','my'], ['name','name'], ['is','is'], ['Prince','Dheeraj'] ]);
