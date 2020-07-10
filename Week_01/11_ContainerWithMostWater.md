# 盛最多水的容器

解法一：双循环 + 倒着遍历

看到这个题目第一次尝试写了一下（没有看老师的答案）。用的最直观的方法，但是第一遍还是错了。 把`i`和`j`直接当成`height[i]`和`height[j]`做计算了。

这里使用到了Javascript的内置`Math`的API。`Math.max`和`Math.min`，很简单，用法详见[Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min), [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)。

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    for(let i = 0, len = height.length; i < len; i++) {
        for(let j = len -1; j > i; j--){
            let h = Math.min(height[i], height[j]);
            let w = j - i;
            maxArea = Math.max(maxArea, h * w)
        }
    }
    return maxArea;
};
```

这个答案的时间复杂度是比较高的O(n^2)，leetcode上只击败了15%的人，基本上没法去面试。

然后听了超哥的讲解，又开始独立解决，但是没有独立搞出来。瞄了一下超哥的解答，自己顺利的搞出来了。


解法二：左右边界 + 向中间收敛

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    for(let i = 0, j = height.length-1; i < j;) {
        let width = j - i; // 这个地方和超哥不一样，将width计算提前就不需要j-i+1这样的表达了
        let minHeight = height[i] < height[j] ? height[i++] : height[j--];
        let area = minHeight * width;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};
```

消除了嵌套循环，这时候的时间复杂度到O(n)了

为了加深理解，使用while循环重写了超哥的事例，感觉更加简洁一些。

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let i = 0, j = height.length -1;
    while(i < j) {
        let width = j-i
        let minHeight = height[i] < height[j] ? height[i++] : height[j--];
        maxArea = Math.max(maxArea, minHeight * width);
    }
    return maxArea;
};
```