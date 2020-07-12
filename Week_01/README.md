# Week01学习笔记

## 课程作业 

**简单：**

- 用 add first 或 add last 这套新的 API 改写 Deque 的代码
- 分析 Queue 和 Priority Queue 的源码
- 删除排序数组中的重复项（Facebook、字节跳动、微软在半年内面试中考过）
- 旋转数组（微软、亚马逊、PayPal 在半年内面试中考过）
- 合并两个有序链表（亚马逊、字节跳动在半年内面试常考）:[21_mergeTwoLists.md](https://github.com/shenlu89/algorithm012/blob/master/Week_01/21_mergeTwoLists.md)
- 合并两个有序数组（Facebook 在半年内面试常考）
- 两数之和（亚马逊、字节跳动、谷歌、Facebook、苹果、微软在半年内面试中高频常考）
- 移动零（Facebook、亚马逊、苹果在半年内面试中考过）: [283_MoveZeroes.md](https://github.com/shenlu89/algorithm012/blob/master/Week_01/283_MoveZeroes.md)
- 加一（谷歌、字节跳动、Facebook 在半年内面试中考过）:[66_PlusOne.md](https://github.com/shenlu89/algorithm012/blob/master/Week_01/66_PlusOne.md)

**中等：**

- 设计循环双端队列（Facebook 在 1 年内面试中考过）

**困难：**

- 接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考）


## 课程内容总结

### 如何高效学习算法训练营课程

- 三分看视频，七分练习
- 视频1.5-2.0倍速播放，难点（暂停+反复），不要只看一遍

### 摒弃“旧”习惯

- 不要死磕（传统方式）
- 五毒神掌（敢于放手，敢于死记硬背）
- 不懒于看高手代码（国际版的高票回答）
- 最佳方式：5分钟想不出来，直接看阶梯或者高票代码，用五毒神掌编程自己的东西。这个过程觉得自己很菜甚至有点自卑，但有借势而起的感觉。
- 最差方式： 看到题目想自己单挑一下，不借助外部帮助自己解决。以为15-30分钟可以搞定，谁知道死磕了2-3个小时，或者一个晚上，终于“通过”。精疲力尽，没有精力学习高票答案，就开始做下一题。

### 学习方法

- 改变自己的学习习惯，不要死磕。
- 五毒神掌（重要的是五！过遍数，而不是每次花很长时间）
- 不要死磕AC了事，要看高票答案
- 最大误区：题目只做一遍
- 照着超哥的话去做，虽然有点反常识

### 期待效果

- 职业顶尖级别的-对算法和数据结构的理解
- 一线互联网公司面试
- LeetCode 300+的积累

### 精通一个领域

- Chunk it up 切碎知识点，庖丁解牛
- Deliberate Practicing 刻意练习
- Feedback 反馈

将知识整理成一个树状的结构：

- 一维：
	- 基础: 数组(array, string)，链表（Linked List）
	- 高级: 栈(stack)，队列(queue)，双端队列(deque)，集合(set)，映射(map/hash)
- 二维：
	- 基础：树(tree)，图(graph)
	- 高级：二叉搜索树(binary search tree)，red-black tree，AVL，堆(heap)，并查集(disjoint set)，字典树(Trie)

- 特殊：
	- 位运算Bitwise，布隆过滤器 BloomFilter
	- LRU Cache

算法：

- if-else, switch -> branch
- for, while loop -> iteration
- 递归 Recursion (Divide & Conquer, Backtrace)
- 搜索 Search: 深度优先 Depth first search，广度优先 Breadth first Search，A*
- 动态规划 Dynamic Programming
- 二分查找 Binary Search
- 贪心 Greedy
- 数学 Math，几何 Geometry

### Delierate Practicing

- 刻意练习-过遍数(五毒神掌)
- 练习缺陷，弱点地方
- 不舒服，不爽，枯燥

课程中的练习：

- [11. 盛最多水的容器](https://github.com/shenlu89/algorithm012/blob/master/Week_01/11_ContainerWithMostWater.md)
- [15. 三数之和](https://github.com/shenlu89/algorithm012/blob/master/Week_01/15_3Sum.md)
- [24. 两两交换链表中的节点](https://github.com/shenlu89/algorithm012/blob/master/Week_01/24_SwapNodesinPairs.md)
- [70. 爬楼梯](https://github.com/shenlu89/algorithm012/blob/master/Week_01/70_climbStairs.md)
- [283. 移动零](https://github.com/shenlu89/algorithm012/blob/master/Week_01/283_MoveZeroes.md)

参考链接：

- [主定理](https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%AE%9A%E7%90%86)
- [如何理解算法时间复杂度的表示法，例如 O(n²)、O(n)、O(1)、O(nlogn) 等？](https://www.zhihu.com/question/21387264)