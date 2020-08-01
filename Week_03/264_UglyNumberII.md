# 丑数 II

解法一：动态规划

```js
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let i2 = 0,
        i3 = 0,
        i5 = 0;
    
    let dp = [1];
    for (let i = 1; i < n; i++) {
        let min = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);
        if (min === dp[i2] * 2) i2++;
        if (min === dp[i3] * 3) i3++;
        if (min === dp[i5] * 5) i5++;
        dp.push(min);
    }
    return dp[n-1];
};
```

```js
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let i2 = 0,
        i3 = 0,
        i5 = 0;
    let dp = [1];
    while (!dp[n-1]) {
        let min = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);
        if (min === dp[i2] * 2) i2++;
        if (min === dp[i3] * 3) i3++;
        if (min === dp[i5] * 5) i5++;
        dp.push(min);
    }
    return dp[n-1];
};
```

复杂度分析：

- 时间复杂度：O(nlogn)
- 空间复杂度：O(n