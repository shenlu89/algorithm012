时间复杂度是O(n)

```js
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let s = "";
    for(let i=0, j=0, len=S.length; i<len; i++) {
        S.charAt(i) === '(' ? j++ : j--;
        if(!(S.charAt(i) === '(' && j === 1 || S.charAt(i) === ')' && j === 0)) {
            s += S.charAt(i);
        }
    }
    return s;
};
```