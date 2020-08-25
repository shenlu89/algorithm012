# 学习笔记

## 本周作业

简单：

- 柠檬水找零（亚马逊在半年内面试中考过）[860_LemonadeChange.md](https://github.com/shenlu89/algorithm012/blob/master/Week_04/860_LemonadeChange.md)
- 买卖股票的最佳时机 II （亚马逊、字节跳动、微软在半年内面试中考过）[122_BestTimetoBuyandSellStockII.md](https://github.com/shenlu89/algorithm012/blob/master/Week_04/122_BestTimetoBuyandSellStockII.md)
- 分发饼干（亚马逊在半年内面试中考过）
- 模拟行走机器人 
- 使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方 [寻找一个半有序数组中间无序的地方.md](https://github.com/shenlu89/algorithm012/blob/master/Week_04/寻找一个半有序数组中间无序的地方.md)

>说明：同学们可以将自己的思路、代码写在第 4 周的学习总结中

中等：

- 单词接龙（亚马逊在半年内面试常考）[寻找一个半有序数组中间无序的地方.md](https://github.com/shenlu89/algorithm012/blob/master/Week_04/寻找一个半有序数组中间无序的地方.md)
- 岛屿数量（近半年内，亚马逊在面试中考查此题达到 350 次）
- 扫雷游戏（亚马逊、Facebook 在半年内面试中考过）
- 跳跃游戏 （亚马逊、华为、Facebook 在半年内面试中考过）
- 搜索旋转排序数组（Facebook、字节跳动、亚马逊在半年内面试常考）
- 搜索二维矩阵（亚马逊、微软、Facebook 在半年内面试中考过）
- 寻找旋转排序数组中的最小值（亚马逊、微软、字节跳动在半年内面试中考过）

困难

- 单词接龙 II （微软、亚马逊、Facebook 在半年内面试中考过）
- 跳跃游戏 II （亚马逊、华为、字节跳动在半年内面试中考过）

### 实战题目

- 二叉树的层序遍历（字节跳动、亚马逊、微软在半年内面试中考过）[102_BinaryTreeLevelOrderTraversal.md](https://github.com/shenlu89/algorithm012/blob/master/Week_04/102_BinaryTreeLevelOrderTraversal.md)
- 最小基因变化 
- 括号生成（字节跳动、亚马逊、Facebook 在半年内面试中考过）[22_GenerateParentheses.md](https://github.com/shenlu89/algorithm012/blob/master/Week_03/22_GenerateParentheses.md)
- 在每个树行中找最大值（微软、亚马逊、Facebook 在半年内面试中考过）[515_FindLargestValueinEachTreeRow.md](https://github.com/shenlu89/algorithm012/blob/master/Week_04/515_FindLargestValueinEachTreeRow.md)

## 课程内容总结

### 遍历搜索

在树（图/状态集）中寻找特定结点

## 搜索-遍历

- 每个节点都要访问一次
- 每个节点仅仅要访问一次
- 对于节点打访问顺序不限
	- 深度优先：
	- 广度优先：

>其余的搜索就不是深度优先和广度优先了，而是按照优先级优先。可以自定义优先，但是需要有现实中的场景。这样的算法我们称为启发式搜索。

### DFS代码模板

**递归写法**

```js
//JavaScript
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}
```

## 广度优先搜索

### BFS代码模板

```js
//JavaScript
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val) 
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
};
```

参考链接

- [coin change 题目]()
- [动态规划定义]()