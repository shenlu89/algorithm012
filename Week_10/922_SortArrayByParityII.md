## 按奇偶排序数组 II

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    for (let i = 0, j = 1, len = A.length; i < len; i += 2) {
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2
            }
            [A[i], A[j]] = [A[j], A[i]]
        }
    }
    return A
};
```

**复杂度分析**
- 时间复杂度：O(N)O(N)，其中 NN 是数组 A 的长度。
- 空间复杂度：O(1)O(1)。

- [双指针 + 扁平化 + 原地交换（1行代码，3解法，超99%）](https://leetcode-cn.com/problems/sort-array-by-parity-ii/solution/shuang-zhi-zhen-bian-ping-hua-1xing-dai-ma-2jie-fa/)