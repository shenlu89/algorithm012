# 字母异位词分组



```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs) return [];
    let map = {};
    let list = [];
    for(let i = strs.length-1; i>=0; i--) {
        let ss = strs[i].split('').sort().join('');
        if(!map.hasOwnProperty(ss)) {
            map[ss] = [strs[i]];
        } else {
            map[ss].push(strs[i]);
        }
    }
    for(let j in map) {
        list.push(map[j]);
    }
    return list;
};
```