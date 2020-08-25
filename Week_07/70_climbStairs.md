# 爬楼梯

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let num = [];
    num[0] = 1, num[1] = 2;
    for (let i = 2; i < n; i++) {
        num[i] = num[i-1] + num[i-2];
    }
    return num[n-1];
};
```