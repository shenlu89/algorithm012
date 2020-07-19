# 学习笔记

## 本周作业

### 简单：

- 写一个关于 HashMap 的小总结。说明：对于不熟悉 Java 语言的同学，此项作业可选做。
- 有效的字母异位词（亚马逊、Facebook、谷歌在半年内面试中考过）[242_ValidAnagram.md](https://github.com/shenlu89/algorithm012/blob/master/Week_02/242_ValidAnagram.md)
- 两数之和（近半年内，亚马逊考查此题达到 216 次、字节跳动 147 次、谷歌 104 次，Facebook、苹果、微软、腾讯也在近半年内面试常考）[1_twoSum.md](https://github.com/shenlu89/algorithm012/blob/master/Week_02/1_twoSum.md)
- N 叉树的前序遍历（亚马逊在半年内面试中考过）[1_twoSum.md](https://github.com/shenlu89/algorithm012/blob/master/Week_02/589_N-aryTreePreorderTraversal.md)
- HeapSort ：自学 https://www.geeksforgeeks.org/heap-sort/

### 中等：

- 字母异位词分组（亚马逊在半年内面试中常考）[49_groupAnagrams.md](https://github.com/shenlu89/algorithm012/blob/master/Week_02/49_groupAnagrams.md)
- 二叉树的中序遍历（亚马逊、字节跳动、微软在半年内面试中考过）
- 二叉树的前序遍历（字节跳动、谷歌、腾讯在半年内面试中考过）
- N 叉树的层序遍历（亚马逊在半年内面试中考过）
- 丑数（字节跳动在半年内面试中考过）
- 前 K 个高频元素（亚马逊在半年内面试中常考

## 下周预习

### 预习题目：

- 爬楼梯
- 括号生成
- Pow(x, n)
- 子集
- N 皇后

## 课程内容总结

面试做题的步骤：

1. clarification
2. possible solution -> optional (time & space)
3. code
4. test code

链表是特殊化的树，树是特殊化的图

二叉树遍历 Pre-order/In-order/Post-order

1. 前序(Pre-order)：根-左-右
2. 中序(In-order)：左-根-右
3. 后序(Post-order)：左-右-根

二叉树拥抱递归

二叉搜索树(Binary Search Tree)

二叉搜索树，又叫二叉搜索排序树，有序二叉树(Ordered Binary Tree)，排序二叉树(Sorted Binary Tree)，是指一棵空树或者具有下列性质的二叉树：

1. 左子树上所有结点的值小于它的根节点的值；
2. 右子树上所有结点的值大于它的根节点的值；
3. 以此类推

中序遍历：生序排列

二叉搜索树常见操作:

1. 查询：O(logN)
2. 插入新节点：O(logN)
3. 删除：比较复杂，如果是叶子结点，直接删除，如果是中间的结点，寻找右子树的最左边结点，替换到中间节点的位置

只有右节点的树就是一个从小到大排列的有序链表。

递归的效率不见得低，除非没有加缓存，递归的空间复杂度要高一些。

### 堆(Heap)

Heap: 可以迅速找到一堆数中的最大值或者最小值的数据结构

将根节点最大的堆叫做大顶堆或者大根堆，根节点最小的堆叫做小顶堆或者小根堆。常见的堆有二叉堆、斐波那契堆等。

假设是大堆，则常见的操作(API):

- find-max: O(1)
- delete-max: O(logN)
- insert(create): O(logN) or O(1)

不同实现的比较，[维基百科：堆（Heap）](https://en.wikipedia.org/wiki/Heap_(data_structure))

### 二叉堆性质

通过完全二叉树来实现（注意：不是二叉搜索树）

二叉堆（大顶）它满足下列性质：

[性质一]是一棵完全树
[性质二]树中任意结点的值总是>=其子节点的值

### 二叉堆实现细节

1. 二叉堆一般都通过“数组”来实现
2. 假设“第一个元素”在数组中的索引为0的话，则父节点和子节点的位置关系如下：

- 索引为i的左孩子的索引是(2*i+1);
- 索引为i的左孩子的索引是(2*i+2);
- 索引为i的父节点的索引是floor((i-1)/2);

insert插入操作,时间复杂度O(logN)

1. 新元素一律先插入到堆的尾部
2. 依次向上调整整个堆的结构（一直到根即可）

HeapifyUp

Delete Max 删除堆顶操作，时间复杂度O(logN)

1. 将堆尾元素替换到顶部
2. 依次从根部向下调整整个堆的结构（一直到堆尾即可）

HeapifyDown

注意：二叉堆是堆（优先队列 priority_queue）的一种常见且简单的实现；但是并不是最优的实现。

**参考链接**

- 连通图个数： https://leetcode-cn.com/problems/number-of-islands/
- 拓扑排序（Topological Sorting）： https://zhuanlan.zhihu.com/p/34871092
- 最短路径（Shortest Path）：Dijkstra https://www.bilibili.com/video/av25829980?from=search&seid=13391343514095937158
- 最小生成树（Minimum Spanning Tree）： https://www.bilibili.com/video/av84820276?from=search&seid=17476598104352152051