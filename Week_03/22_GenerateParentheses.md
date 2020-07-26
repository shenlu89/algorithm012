# 括号生成

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function _generate(left, right, num, str) {
        if (right === num) {
            res.push(str);
        }
        if (left < n) {
            _generate(left+1, right, num, str + "(");
        }
        if (left > right) {
            _generate(left, right+1, num, str + ")");
        }
    }
    _generate(0, 0, n, '');
    return res;
};
```