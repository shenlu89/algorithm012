## 单词规律

解法一：双哈希 + Map

```js
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr = s.split(' ')
    if (pattern.length !== arr.length) return false
    const hp = new Map, hc = new Map
    for (let i = 0, len = arr.length; i < len; i++) {
        const p = pattern[i], c = arr[i]
        if (hp.has(p)) {
            if (hp.get(p) !== c) return false
        } else {
            hp.set(p, c)
        }
        if (hc.has(c)) {
            if (hc.get(c) !== p) return false
        } else {
            hc.set(c, p)
        }
    }
    return true
};
```