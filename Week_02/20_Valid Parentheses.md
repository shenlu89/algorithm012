# 有效括号

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 !== 0) return false;
    let map = {"(":")", "[":"]", "{":"}"};
    let stack = [];
    for(let i = s.length-1; i>=0; i--) {
        if(map.hasOwnProperty(s.charAt(i))) {
            if(stack.pop() !== map[s.charAt(i)]) return false;
        } else {
            stack.push(s.charAt(i));
        }
    }
    return !stack.length;
};
```
更好的写法

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length;
    if (len % 2) return false;
    let stack = [];
    for (let i = len-1, map = {"(":")", "[":"]", "{":"}"}; i >= 0; i--) {
        let char = s.charAt(i);
        if (map[char]) {
            if(stack.pop() !== map[char]) return false;
        } else {
            stack.push(char)
        }
    }
    return !stack.length;
};
```