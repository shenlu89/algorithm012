# 全排列

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  function dfs(path) {
    if (path.length == nums.length) {
      res.push(path.slice())
    }
    for (let num of nums) {
      if (path.includes(num)) continue
      path.push(num);
      dfs(path);
      path.pop();
    }
  }
  dfs([]);
  return res;
};
```