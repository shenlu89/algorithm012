# 二叉树的中序遍历

解法一：递归

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
var inorderTraversal = function(root) {
    let res = [];
    function traversal(root) {
        if (root) {
            traversal(root.left);
            res.push(root.val);
            traversal(root.right);
        }
    }
    traversal(root);
    return res;
};
```