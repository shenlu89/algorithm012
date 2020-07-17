# 两数之和

看完题目描述，就写出来了。Javascript的Object天然就是一个哈希表(Hash Table)。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    let map = {};
    for(let i = 0, len = nums.length; i < len; i++) {
        let key = target - nums[i];
        if(map.hasOwnProperty(key)){
            arr = [map[key], i];
            break;
        }
        map[nums[i]] = i;
    }
    return arr;
};
```

感觉写的有点难看，再改一下。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0, len = nums.length; i < len; i++) {
        let key = target - nums[i];
        if(map.hasOwnProperty(key)){
            return [map[key], i];
        }
        map[nums[i]] = i;
    }
    return [];
};
```

这样更简洁一些。