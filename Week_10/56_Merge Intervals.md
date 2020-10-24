# 合并区间

方法一：迭代

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let mergedInt = [];
    if (!intervals || !intervals.length) {
        return mergedInt;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    mergedInt.push(intervals.shift())
    for (let interval of intervals) {
        let len = mergedInt.length,
        mid = mergedInt[len-1];
        if (interval[0] <= mid[1] && mid[1] < interval[1]) {
            mergedInt[len-1] = [mid[0], interval[1]];
        } else if (mid[1] < interval[0]) {
            mergedInt.push(interval);
        }
    }
    return mergedInt;
};
```

进一步简化


```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let mergedInt = [];
    if (!intervals || !intervals.length) {
        return mergedInt;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    mergedInt.push(intervals.shift())
    for (let interval of intervals) {
        let len = mergedInt.length,
        mid = mergedInt[len-1];
        if (interval[0] <= mid[1]) {
            mergedInt[len-1] = [mid[0], Math.max(interval[1], mid[1])];
        } else {
            mergedInt.push(interval);
        }
    }
    return mergedInt;
};
```