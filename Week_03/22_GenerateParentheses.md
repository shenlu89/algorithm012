# 括号生成

解法一： DFS

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function generate(left, right, s) {
        if (left === n && right === n) {
            res.push(s);
            return;
        }
        if (left < n) {
            generate(left+1, right, s+"(");
        }
        if (left > right) {
            generate(left, right+1, s+")");
        }
    }
    generate(0, 0, '');
    return res;
};
```

时间复杂度O(2^n)