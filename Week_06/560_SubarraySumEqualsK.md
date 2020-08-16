# 和为K的子数组

解法一：迭代

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        let j = i;
        let sum = 0;
        while (j < len) {
            sum += nums[j];
            if (sum === k) count++;
            j++;
        }
    }
    return count;
};
```

反向遍历


```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    for (let i = nums.length; i>=0; i--) {
        let j = i;
        let sum = 0;
        while (j>=0) {
            sum += nums[j];
            if (sum === k) count++;
            j--;
        }
    }
    return count;
};
```

时间复杂度 O(n)

解法二：前缀和 + 哈希表优化

```js

```