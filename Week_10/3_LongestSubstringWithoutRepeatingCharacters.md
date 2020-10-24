# 无重复字符的最长子串

解法一：迭代

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        let char = s[i];
        let index = arr.indexOf(char);
        if (index !== -1) {
           arr.splice(0, index+1);
        }
        arr.push(s[i]);
        max = Math.max(arr.length, max);
    }
    return max;
};
```

复杂度分析：
- 时间复杂度： O(n)
- 空间复杂度： O(n)

解法二：滑动窗口

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = 0;
    for (let i = 0, j = 0, len = s.length; j < len; j++) {
        let char = s[j];
        let index = s.substring(i, j).indexOf(char);
        if (index > -1) {
            i = i+index+1;
        }
        max = Math.max(max, j-i+1);
    }
    return max;
};
```

解法三：Map优化


```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = 0;
    for (let i = 0, j = 0, len = s.length; j < len; j++) {
        let char = s[j];
        let index = s.substring(i, j).indexOf(char);
        if (index > -1) {
            i = i+index+1;
        }
        max = Math.max(max, j-i+1);
    }
    return max;
};
```

复杂度分析：
- 时间复杂度： O(n)
- 空间复杂度： O(1)

1. 张老师是外包的财务?
2. 投资人投资之后，会管你怎么花钱吗? 会撤资吗？

- 前期谈好，投资之后不管，就看结果
- 投资之前谈好，如何花这笔钱。投资之后逐个落实
- 如果发展不理性，投资人会撤资吗？钱需要还吗？