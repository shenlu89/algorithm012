# Fizz Buzz


太简单了没啥好说的

- 时间复杂度 O(N)
- 空间复杂度 O(N)

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        if(i%3 === 0 && i%5 === 0) {
            res.push("FizzBuzz");
        } else if (i%3 === 0) {
            res.push("Fizz");
        } else if (i%5 === 0) {
            res.push("Buzz");
        } else {
            res.push("" + i);
        }
    }
    return res;
};
```

另一种写法或许更好一点。

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let current = '';
        if(i%3 === 0) current += "Fizz";
        if(i%5 === 0) current += "Buzz";
        if(!current) current += i;
        res.push(current);
    }
    return res;
};
```