# 合并区间


```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let idx = -1;
    for (let interval of intervals) {
        if (idx == -1 || interval[0] > res[idx][1]) {
            res.push(interval);
            idx++;
        } else {
            res[idx][1] = Math.max(res[idx][1], interval[1]);
        }
    }
    return res;
};
```