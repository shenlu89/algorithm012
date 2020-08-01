# 柠檬水找零

```js
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if (!bills) return false;
    let five = 0, ten = 0;
    for (let bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            ten++;
            five--;
            if (five < 0) return false;
        } else {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
```

复杂度分析

- 时间复杂度：O(N)，其中 N 是 bills 的长度。
- 空间复杂度：O(1)。