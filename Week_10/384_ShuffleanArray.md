# 打乱数组

解法一：Fisher–Yates shuffle 洗牌算法

```js
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let nums = this.nums.slice(0);
    let len = nums.length;
    while (len > 0) {
        let random = Math.floor(Math.random() * len--);
        [nums[random], nums[len]] = [nums[len], nums[random]];
    }
    return nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```