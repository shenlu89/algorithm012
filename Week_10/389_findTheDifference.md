# 找不同

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let len = s.length;
    for (let i = len-1; i >= 0; i--) {
        t = t.replace(s.charAt(i), '');
    }
    return t;
};
```

再简化写法，但是速度不够快

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for (let char of s) {
        t = t.replace(char, '');
    }
    return t;
};
```