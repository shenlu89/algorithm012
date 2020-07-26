# 多数元素


解法一： 排序

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums.sort((a,b) => a-b)[Math.floor(nums.length/2)];
};
```

复杂度分析：

- 时间复杂度 O(nlogn) 使用了快速排序
- 空间复杂度 O(1) 是原地修改数组

解法二： 哈希

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    let len = nums.length;
    let index = len/2;
    for (let i = nums.length-1; i>=0; i--) {
        let num = nums[i];
        if (map.hasOwnProperty(num)) {
            map[num]++;
        } else {
            map[num] = 1;
        }
        if (map[num] > index) return num;
    }
};
```

复杂度分析：

- 时间复杂度 O(n) 
- 空间复杂度 O(n) 

解法三：抵消

```js

```

复杂度分析：

- 时间复杂度 O(n) 
- 空间复杂度 O(1) 