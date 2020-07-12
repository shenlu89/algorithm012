# 加一

经过自己的思考完成的。

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length-1]++;
    for(let i = digits.length-1; i>0; i--) {
        if(digits[i] === 10) {
            digits[i] = 0;
            digits[i-1]++;
        }
    }
    if(digits[0] === 10) {
        digits[0] = 0;
        digits = [1,...digits];
    }
    return digits;
};
```