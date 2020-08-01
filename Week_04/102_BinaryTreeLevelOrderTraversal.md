# 二叉树的层序遍历

解法一：递归

自己想出来的DFS，很简单。

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    function recusion(root, level) {
        if (!root) return;
        if (res[level] === undefined) res[level] = [];
        res[level].push(root.val);
        recusion(root.left, level+1);
        recusion(root.right, level+1);
    }
    recusion(root, 0);
    return res;
};
```

广度优先(BFS)再写一遍

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if (!root) return res;
    let queue = [root];
    while (queue.length) { // 没有节点在列，就是遍历完毕
        let level = [];
        for (let i = 0, len = queue.length; i < len; i++) { // 遍历当前层的节点
            let node = queue.shift(); // 出列
            level.push(node.val); // 填充level数组
            if (node.left) queue.push(node); // 下层节点入列
            if (node.right) queue.push(node);
        }
        res.push(level);
    }
    return res;
};
```