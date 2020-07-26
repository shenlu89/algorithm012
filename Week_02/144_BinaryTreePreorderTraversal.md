# 二叉树的前序遍历

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
var preorderTraversal = function(root) {
    let res = [];
    function traversal(node) {
        if (node) {
            res.push(node.val);
            traversal(node.left);
            traversal(node.right);
        }
    }
    traversal(root);
    return res;
};
```