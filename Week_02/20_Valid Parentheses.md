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