# 反转字符串

方法一：迭代

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0, j = s.length-1, len = parseInt(j/2); i <= len && j >= 0; i++, j--) {
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
};
```