# N叉树的前序遍历

参考了[一套拳法👊刷掉n个遍历树的问题](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen--3/)


解法一：递归

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];
    function recusion(node) {
        if (!node) return;
        res.push(node.val);
        for(let i = 0, len = node.children.length; i < len; i++) {
            recusion(node.children[i])
        }
    }
    recusion(root);
    return res;
};
```

下面是一个网友写的，还没太搞明白

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if(!root) return [];
  return Array.prototype.concat.apply([root.val], root.children.map(child => preorder(child)))
};
```

解法二：迭代

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let result = [], current = root;
  while(current){
    result.push(current.val);
    let temp = current.children;
    if(!temp.length) return result;
    current = current.children.shift();
    let next = current;
    while (next.children.length) {
      next = next.children[next.children.length - 1];
    }
    next.children = temp;
  }
  return result;
}
```