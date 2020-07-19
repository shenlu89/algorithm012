# 滑动窗口最大值

这个题花了我半天时间思考。

解法一：暴力

Javascript使用技巧：

- 使用slice提取子数组，范围是[start, end)，不改变原数组内容。详解[Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- `Math.max`使用`...array`找到数组中的最大值，等价于`Math.max.apply(null, array)`。

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let len = nums.length;
    if (len <= 1) return nums;
    let res = [];
    for (let i = 0; i < len-k+1; i++) {
        res.push(Math.max(...nums.slice(i,i+k)));
    }
    return res;
};
```

上面是我写的，下面是看网友的，比较直观，没有花哨的Javascript API

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    if(n == 0) return [];
    let res = [];
    for(let i = 0;i < n - k + 1;i++){
        let max = Number.MIN_SAFE_INTEGER;
        for(let j = i;j < i + k;j++){
            max = Math.max(max,nums[j]);
        }
        res.push(max);
    }
    return res;
};
```

复杂度分析：

- 时间复杂度：O(n*k)
- 空间复杂度：O(n-k)


解法二：滑动窗口 + 双端队列


```js
var maxSlidingWindow = function (nums, k) {
    let deque = []; // 使用双端队列存放nums的下标，对应的nums[index]在deque单调递减, index单调递增。
    let res = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        if (i - deque[0] === k) {
            deque.shift(); // i移动到下一个index时，要检查一下当前index与deque中保留的滑动窗口中最左边的index之差是否等于k，如果相等就删除deque[0]。因为deque保留的是nums从左到右的下标，deque[0]代表了当前存在deque内的nums的最左侧下标。如果i-deque[0]===k，说明deque[0]已经不再当前滑动窗口的范围内了，需要从双端队列中排除，才能进行后面的操作。
        }
        // 经过上面if语句的排除，现在duque里存放的nums下标和当前nums下标(i)，就是当前滑动窗口的下标了。
        while (nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop(); // 将小于当前下标对应nums[index]值的index从双端队列中排除，为了维持双端队列的单调性，需要通过pop()从堆尾排出。
        }
        deque.push(i); // 上面的while循环保证了进入队列的index是单调自增的，保留在duque中的index对应的nums[index]是单调递减的。换句话说deque[0]定义的下标（如果deque不为空的话）在nums的滑动窗口中的最大值。
        if (i >= k-1) { // i直到滑动到下一个窗口前，才将滑动窗口的的最大值加入到res中，deque[0]对应nums的下标在当前滑动窗口中的最大值。
            res.push(nums[deque[0]]);
        }
    }
    return res;
}
```

复杂度分析：

- 时间复杂度 O(n)
- 空间复杂度 O(n)