# 学习笔记

## 本周作业

### 中等

- 最小路径和（亚马逊、高盛集团、谷歌在半年内面试中考过）[64_MinimumPathSum.md](https://github.com/shenlu89/algorithm012/blob/master/Week_01/64_MinimumPathSum.md)
- 解码方法（亚马逊、Facebook、字节跳动在半年内面试中考过）
- 最大正方形（华为、谷歌、字节跳动在半年内面试中考过）[221_MaximalSquare.md](https://github.com/shenlu89/algorithm012/blob/master/Week_01/221_MaximalSquare.md)
- 任务调度器（Facebook 在半年内面试中常考）
- 回文子串（Facebook、苹果、字节跳动在半年内面试中考过）

### 困难

- 最长有效括号（字节跳动、亚马逊、微软在半年内面试中考过）
- 编辑距离（字节跳动、亚马逊、谷歌在半年内面试中考过）
- 矩形区域不超过 K 的最大数值和（谷歌在半年内面试中考过）
- 青蛙过河（亚马逊、苹果、字节跳动在半年内面试中考过）
- 分割数组的最大值（谷歌、亚马逊、Facebook 在半年内面试中考过）
- 学生出勤记录 II （谷歌在半年内面试中考过）
- 最小覆盖子串（Facebook 在半年内面试中常考）
- 戳气球（亚马逊在半年内面试中考过）

## 课程内容总结

分治 + 回溯 + 递归 + 动态规划

### 感触

1. 人肉递归低效、很累
2. 找到最近最简方法，将其拆解成可重复解决的问题
3. 数学归纳法思维（抵制人肉递归的诱惑）

>本质：寻找重复性 —> 计算机指令集

### 动态规划 Dynamic Programming

1. 1.Wiki 定义：
https://en.wikipedia.org/wiki/Dynamic_programming

2. “Simplifying a complicated problem by breaking it down into
simpler sub-problems”
(in a recursive manner)

3. Divide & Conquer + Optimal substructure
 分治 + 最优子结构

### 关键点

动态规划 和 递归或者分治 没有根本上的区别（关键看有无最优的子结构） 

- 共性：找到重复子问题
- 差异性：最优子结构、中途可以淘汰次优解

### 状态转移方程（DP 方程）

opt[i, j] = opt[i+1, j] + opt[i, j+1]

### 动态规划关键点

1. 最优子结构 opt[n] = best_of(opt[n-1], opt[n-2], …)
2. 2. 储存中间状态：opt[i]
3. 3. 递推公式（美其名曰：状态转移方程或者 DP 方程）
Fib: opt[i] = opt[n-1] + opt[n-2]
二维路径：opt[i,j] = opt[i+1][j] + opt[i][j+1] (且判断a[i,j]是否空地）

### 动态规划小结

1. 打破自己的思维惯性，形成机器思维
2. 理解复杂逻辑的关键
3. 也是职业进阶的要点要领

## 课程中的练习：

- [不同路径（Facebook、亚马逊、微软在半年内面试中考过）](https://leetcode-cn.com/problems/unique-paths/)
- [不同路径 II （谷歌、美团、微软在半年内面试中考过）](https://leetcode-cn.com/problems/unique-paths-ii/)
- [最长公共子序列（字节跳动、谷歌、亚马逊在半年内面试中考过）](https://leetcode-cn.com/problems/longest-common-subsequence/)
- [MIT 动态规划课程最短路径算法 ](https://www.bilibili.com/video/av53233912?from=search&seid=2847395688604491997)