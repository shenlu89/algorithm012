# 括号生成

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function generate(left, right, str) {
        if (left === n && right === n) {
            res.push(str)
            return
        }
        if (left < n) {
            generate(left+1, right, str+"(");
        }
        if (left > right) {
            generate(left, right+1, str+")");
        }
    }
    generate(0, 0, "");
    return res;
};
```