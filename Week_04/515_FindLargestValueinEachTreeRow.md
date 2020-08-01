# 在每个树行中找最大值

解法一：BFS(广度优先搜索)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let res = [];
    if (!root) return res;
    let queue = [root]
    while (queue.length) {
        let level = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(Math.max.apply(null, level));
    }
    return res;
};
```

解法二：DFS(深度优先搜索)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    let res = [];
    function recusion(node, level) {
        if (!node) return;
        if (res[level] === undefined) res[level] = node.val;
        res[level] = Math.max(res[level], node.val);
        recusion(node.left, level+1);
        recusion(node.right, level+1); 
    }
    recusion(root,0);
    return res;
};
```