## 字符串解码

初步分析是，用堆判断括号([])边界，递归得出最后结果

解法一：栈+递归

```js
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if (s.indexOf(']') === -1) return s
    let num = ""
    let stack = 0
    let str = ""
    let substr = ""
    for (const char of s) {
        if (Number.isInteger(+char)) {
            if (stack) {
                substr += char
            } else {
                num += char
            }
        } else if (char === "[") {
            stack++
            if (stack > 1) {
                substr += char
            }
        } else if (char === "]") {
            stack--
            if (stack) {
                 substr += char               
            } else {
                num = +num
                while (num--) {
                    str += substr
                }
                substr = ""
                num = ""
            }
        } else {
            if (stack) {
                substr += char
            } else {
                str += char
            }
        }
    }
    return decodeString(str)
};
```