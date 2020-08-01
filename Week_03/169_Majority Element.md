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

写的再简略一些就是

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {};
    let index = nums.length/2;
    for (let n of nums) {
        hash[n] = (hash[n] || 0) + 1;
        if (map[n] > index) return n;
    }
};
````

复杂度分析：

- 时间复杂度 O(n) 
- 空间复杂度 O(n) 

解法三：抵消

```js
var majorityElement = function(nums) {
  let x = 0;
  let m = 0;
  for(let n of nums){
    if(m === 0) {
    	x = n;
    }
    m += x === n ? 1 : -1;
  }
  return x;
};
```

复杂度分析：

- 时间复杂度 O(n) 
- 空间复杂度 O(1) 