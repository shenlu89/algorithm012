# 接雨水

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length;
    if (len < 3) return 0;
    let rain = 0;
    let lm = 0;
    let rm = 0;
    let leftMax = [];
    let rightMax = [];
    for (let i = len-1; i >= 0; i--) {
        rm = Math.max(rm, height[i]);
        rightMax[i] = rm;
        lm = Math.max(lm, height[len-i-1]);
        leftMax[len-i-1] = lm;
    }
    for (let j = len-1; j >= 0; j--) {
        rain += Math.min(rightMax[j], leftMax[j]) - height[j];
        console.log(rain);
    }
    return rain;
};
```

解法二：双指针法

双指针法让我思考了半天，真心不好描述。

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length < 3) return 0
    let count = 0,
        left = 0,
        right = height.length - 1,
        leftMax = 0,
        rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                count += leftMax - height[left];
            }
            left++
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                count += rightMax - height[right];
            }
            right--
        }
    }
    return count
};
```
上面写写法，优化一下，得到下面的例子。

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length, rain = 0;
    if (len < 3) return rain;
    let left = 0, right = len-1, maxLeft = 0, maxRight = 0;
    while(left < right) {
        let cur = height[left];
        if (cur < height[right]) {
            cur >= maxLeft ? maxLeft = cur : rain += maxLeft - cur;
            left++;
        } else {
            cur = height[right]
            cur >= maxRight ? maxRight = cur : rain += maxRight - cur;
            right--;
        }
    }
    return rain;
};
```