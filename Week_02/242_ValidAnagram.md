# 有效的字母异位词

解法一：暴力

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let ss = s.split('').sort();
    let st = t.split('').sort();
    for(let i = ss.length-1; i >= 0; i--){
        if(ss[i] !== st[i]) {
            return false;
        }
    }
    return true;
};
```

在简化一下

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.length !== t.length ? false : s.split('').sort().join('') === t.split('').sort().join('');
};
```

时间复杂度是O(NlogN)

解法二：哈希表

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map = {};
    for(let i = s.length-1; i>=0; i--) {
        let sc = s.charAt(i);
        let tc = t.charAt(i);
        if(!map.hasOwnProperty(sc)) {
            map[sc] = 0;
        }
        if(!map.hasOwnProperty(tc)) {
            map[tc] = 0;
        }
        map[sc]++;
        map[tc]--;
    }
    for(let j in map){
        if(map[j] !== 0) {
            return false;
        }
    }
    return true;
};
```