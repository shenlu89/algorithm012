# N叉树的层序遍历

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    function recusion(node, level) {
        if(!node) {
            return;
        }
        if(res[level] === undefined) {
            res[level] = [];
        }
        res[level].push(node.val);
        for (let i = 0, len = node.children.length; i < len; i++) {
            recusion(node.children[i], level+1);
        }
    }
    recusion(root, 0);
    return res;
};
```