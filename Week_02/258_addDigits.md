# 两数相加

解法一：迭代法

时间复杂度O(N)

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    let digits = ""+num;
    let n = 0;
    for (let i = digits.length-1; i>=0; i--) {
        n += Number(digits.charAt(i));
    }
    return addDigits(n);
};
```

解法二：通项公式法

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return num < 10 ? num : num % 9 || 9;
};
```

下面是更好的写法

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return (num-1)% 9 + 1;
};
```