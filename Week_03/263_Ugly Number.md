# 丑数

```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    while (num) {
        if (num % 2 === 0) {
            num /= 2;
            continue;
        } else if (num % 3 === 0) {
            num /= 3;
            continue;
        } else if (num % 5 === 0) {
            num /= 5;
            continue;
        } else {
            return num === 1;
        } 
    }
    return false;
};
```