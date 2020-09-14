# 反转字符串 II

解法一：迭代

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let strArr = s.split('');
    let len = s.length;
    let step = 2*k;
    for (let i = 0; i < len; i += step) {
    	let start = i;
    	let end = i+k-1;
    	while (start < end) {
            [strArr[end], strArr[start]] = [strArr[start], strArr[end]];
            start++;
            end--;
    	}
    }
    return strArr.join('');
}
```

上面的代码有一个隐藏点，就是当s