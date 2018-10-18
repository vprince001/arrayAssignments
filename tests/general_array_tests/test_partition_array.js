const assert = require("assert");
const {partitionArray} = require("../../library/general_array_lib.js");

assert.deepEqual(partitionArray([1,2,3],2), [ [1,2],[3] ] );
assert.deepEqual(partitionArray([1,2,3,4,5],3), [ [1,2,3],[4,5] ] );
assert.deepEqual(partitionArray([3,,4,6],4), [ [3,4],[6] ] );
assert.deepEqual(partitionArray([3,7,5,4,3,45,1,0],4), [ [0,1,3,3,4],[5,7,45] ] );
assert.deepEqual(partitionArray(['k','s','d','b','d','a','l','k'],'d'),[['a','b','d','d'],['k','k','l','s']]);
assert.deepEqual(partitionArray(['All','men','must','die'],'men'), [ ['All','die','men'],['must'] ] );
