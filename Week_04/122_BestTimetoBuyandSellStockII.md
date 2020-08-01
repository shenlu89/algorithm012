# 买卖股票的最佳时机 II

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices) return 0;
    let sum = 0;
    for (let i = 0, j = i+1, len = prices.length; j < len;) {
        if (prices[i] < prices[j]) {
            while (j < len && prices[j] <= prices[j+1]) j++;
            sum += (prices[j] - prices[i]);
            i = j;
            j = i+1;
        } else {
            i = j;
            j++;
        }
    }
    return sum;
};
```

复杂度分析

- 时间复杂度：O(N)，其中 N 是 bills 的长度。
- 空间复杂度：O(1)。