# 学习笔记

## 本周作业

### 本周作业

- 中等：
	- 二叉树的最近公共祖先（Facebook 在半年内面试常考）[236_LowestCommonAncestorofaBinaryTree.md](https://github.com/shenlu89/algorithm012/blob/master/Week_03/236_LowestCommonAncestorofaBinaryTree.md)
	- 从前序与中序遍历序列构造二叉树（字节跳动、亚马逊、微软在半年内面试中考过）[105_ConstructBinaryTreefromPreorderandInorderTraversal.md](https://github.com/shenlu89/algorithm012/blob/master/Week_03/105_ConstructBinaryTreefromPreorderandInorderTraversal.md)
	- 组合（微软、亚马逊、谷歌在半年内面试中考过）
	- 全排列（字节跳动在半年内面试常考）
	- 全排列 II （亚马逊、字节跳动、Facebook 在半年内面试中考过）

- 下周预习
	- 预习题目：
	- 二叉树的层次遍历
	- 分发饼干
	- 买卖股票的最佳时机 II
	- 跳跃游戏
	- x 的平方根
	- 有效的完全平方数

## 课程内容总结

## 递归

一句话，我认为递归的本质就是将原问题拆分成具有相同性质的子问题。

递归的特点：
1、子问题拆分方程式，比如：f(n) = f(n-1) * n
2、终止条件：也就是子问题无法再进一步拆分时，这时可以直接求出解，退出递归。

## 迭代

我们知道递归和迭代其实是天生一对的，本质是一样的，迭代只是我们自己模拟了递归的调用栈而已，因此迭代一般会用到栈这样的数据结构

递归和迭代在二叉树用的非常多，二叉树基本天生就跟递归一起的，因为思路简单，符合人们的正常思维，只要有递归的地方，都可用转换为迭代，大家可以自己使用二叉树的题目来练习练习递归和迭代。

### 分治 (Divide & Conquer)

- Divide: 把问题分解成子问题问题
- Conquer: 解决子问题
- Merge: 合并子问题解


>分治和回溯，本质上就是递归，是递归的一个细分类。可以理解为分治和回溯，就是一种特殊的递归，或者是较为复杂的递归。


碰到一个题目，就会找到他的重复性：

1. 最优重复性：动态规划
2. 最近重复性：根据重复性的构造和分解，便有分治和回溯。

### 分治代码模板

```js
// JavaScript
const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return 
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level+1, params)
   //clean current level status if needed
   
}
```

### 回溯 （Backtracking）

回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程
中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将
取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问
题的答案。

回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种
情况：

- 找到一个可能存在的正确的答案；

- 在尝试了所有可能的分步方法后宣告该问题没有答案。

在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算。


**实战题目**

1. https://leetcode-cn.com/problems/majority-element/
description/ （简单、但是高频）
2. https://leetcode-cn.com/problems/letter-combinations-of-aphone-number/
3. https://leetcode-cn.com/problems/n-queens/

**预习题目**

1. https://leetcode-cn.com/problems/majority-element/
description/ （简单、但是高频）

2. https://leetcode-cn.com/problems/letter-combinations-of-aphone-number/
3. https://leetcode-cn.com/problems/n-queens/