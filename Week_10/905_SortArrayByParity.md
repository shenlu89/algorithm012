## 按奇偶排序数组

解法一：栈

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const res = []
    for (const i of A) {
        if (i%2) {
            res.push(i)
        } else {
            res.unshift(i)
        }
    }
    return res
};
```

解法二：排序

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return A.sort((a, b) => (a&1) - (b&1))
};
```

解法三：双指针（夹逼法）

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let i = 0, j = A.length - 1
    while (i !== j) {
        while (A[i] % 2 === 0 && i < j) i++
        while (A[j] % 2 === 1 && i < j) j--
        [A[i], A[j]] = [A[j], A[i]]
    }
    return A
};
```