# 二叉树的最大深度

解法一：傻递归

复杂度分析：

- 时间复杂度：O(N)
- 空间复杂度：O(log⁡(N))

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
 * @return {number}
 */
var maxDepth = function(root) {
    return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

解法二：FIFO队列

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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let queue = [root];
    let level = 0;
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level++;
    }
    return level;
};
```