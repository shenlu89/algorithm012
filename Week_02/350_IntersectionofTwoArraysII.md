```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(!nums1 || !nums2){
    	return [];
    }
    nums1.sort();
    nums2.sort();
    let arr = [];
    while(nums1.length && nums2.length) {
    	if(nums1[0] === nums2[0]) {
    		nums1.shift();
    		arr.push[nums2.shift()]
    	} else if (nums1[0] < nums2[0]) {
    		nums1.shift();
    	} else {
    		nums2.shift();
    	}
    }
    return arr;
};
```