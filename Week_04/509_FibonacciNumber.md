# 斐波那契数

解法一：递归

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
	return N < 2 ? N : fib(N-1) + fib(N-2);
};
```


解法二：迭代/动态规划

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let first = 0;
    let second = 1;
    while (N--) {
        [first, second] = [second, first+second];
    }
    return first;
};
```
下面代码中，`while`先判断`n`的布尔值，然后才会计算`n--`，然后再跳入循环执行

```js
let n = 1
while (n--) {
	console.log(n);
}
```

可以理解成

```js
let n = 1
while (n) {
	n--;
	console.log(n);
}
```