# 从前序与中序遍历序列构造二叉树

想不出怎么搞，看答案才明白。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var preLen = preorder.length;
    var inLen = inorder.length;

    if(preLen !== inLen) {
        return null;
    }

    // hash map 中序遍历
    var map = {};
    for (var i = 0; i < inLen; i++) {
        map[inorder[i]] = i;
    }
    // 初始状态
    // 前序：根 0，左 1~x，右 x+1~len
    // 中序：左，0~inRootIndex-1,中 inRootIndex map[pre[0]]，右 c+1~len
    return buildSubtree(preorder, 0, preLen - 1, inorder, 0, inLen - 1, map)
};

/**
 * 构建下一个节点
 * @param: preorder 前序遍历
 * @param: preLeft 前序遍历左边界
 * @param: preRight 前序遍历右边界
 * @param: inorder 中序遍历
 * @param: inLeft 中序遍历左边界
 * @param: inRight 中序遍历右边界
 * @param: map 中序遍历映射
 */
function buildSubtree(preorder, preLeft, preRight, inorder, inLeft, inRight, map) {
    if(preLeft > preRight || inLeft > inRight) {
        return null;
    }
    var treeNode = {}
    // 前序遍历的根节点对应 —— 该值 map 到的中序遍历的下标
    var inRootIndex = map[preorder[preLeft]];
    // 前序遍历，左子树的最后一位索引值 x
    // x - (preLeft + 1) === (inRootIndex - 1) - inLeft => x = inRootIndex + preLeft - inLeft
    var x = inRootIndex + preLeft - inLeft;
    treeNode.val = preorder[preLeft];
    treeNode.left = buildSubtree(preorder, preLeft + 1, x, inorder, inLeft, inRootIndex - 1, map );
    treeNode.right = buildSubtree(preorder, x + 1, preRight, inorder,  inRootIndex + 1, inRight, map);
    // console.log(treeNode)
    return treeNode;
}
```

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length !== inorder.length) {
    return null;
  }
  const map = {};
  for(let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }
  return buildSubtree(preorder, inorder, 0, preorder.length -1, map)
};

/**
 * @param: preorder
 * @param: inorder
 * @param: start `中序遍历`的左子树开始位置
 * @param: end `中序遍历`的右子树结束位置
 * @param: map
 */
var buildSubtree = function(preorder, inorder, start, end, map) {
    // start === end 时为叶子节点,
    // start > end 表示 null
    if ( start > end) {
      return null;
    }

    let val = preorder.shift();
    // 前序遍历
    let root = new TreeNode(val);

    // 中序遍历对应的根节点
    let index = map[val];

    // 递归全部左子树
    root.left = buildSubtree(preorder, inorder, start, index -1, map);
    // 递归全部左子树
    root.right = buildSubtree(preorder, inorder, index +1, end, map);

    return root;

};
```